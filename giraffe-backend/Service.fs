module StateEconomyGame.Service

open System
open System.Collections.Generic
open System.IO
open System.Runtime.InteropServices.JavaScript
open System.Threading.Tasks
open System.Data.Common
open Dapper
open Giraffe
open Microsoft.FSharp.Core
open Dapper.FSharp.SQLite
open Microsoft.Data.Sqlite //! Had annoying SQLite interop issues
open System.Text.Json

open StateEconomyGame.Model
open StateEconomyGame.Constants
open StateEconomyGame.Util


//! F# lists != .NET lists, this got me in some type trouble with 4e18b9d]

// H/T to Michael
let taskMap<'a, 'b> (fn: 'a -> 'b) (a: Task<'a>) : Task<'b> =
    task {
        let! results = a
        return fn results
    }

let taskGet (task: Task<'a>) = task.Result //Why no Result.get?

let validationBoolOption (isValid: bool) (appErrorOnFail: AppErrorDto) =
    if isValid then Option.None else Some appErrorOnFail

let getAppErrorDto code message : AppErrorDto = { code = code; message = message }

let internalErrorDto = getAppErrorDto 500 "Internal server error"

let validationAppResultOption failCode failMessage result =
    match result with
    | Ok _ -> Option.None
    | Error e -> getAppErrorDto failCode failMessage |> Some


let sqliteConnection (sqliteDbFileName: string) = //! Use this as parameter
    use connection = new SqliteConnection($"Data Source={sqliteDbFileName}")
    OptionTypes.register () |> ignore
    connection.Open() |> ignore
    connection

let puzzleAnswerTable = table'<PuzzleAnswer> "target_states"
let puzzleSessionTable = table'<PuzzleSession> "puzzle_sessions"
let guessTable = table'<Guess> "guesses"

let getTotalGdp (economyNode: State) =
    let rec loop (economyNode: EconomyNode) =
        match economyNode.children with
        | Some children -> children |> List.map loop |> List.sum
        | _ -> economyNode.gdp |> Option.defaultValue 0

    loop economyNode.stateEconomy |> Math.Round |> Convert.ToInt64

//! d1d6f54: The type providers get to be a pain in the ass for nested classes, reference MgetTotalGdp
//! Don't love the double unions but it's whatever

let getOneFromQuery =
    taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> Ok value
        | None -> Error "No elements found")

let getPuzzleAnswer (dbConnection: DbConnection) =
    select {
        for puzzleAnswer in puzzleAnswerTable do //! Ideally would use 'top' instead
            selectAll
            orderByDescending puzzleAnswer.id
    }
    |> dbConnection.SelectAsync<PuzzleAnswer>
    |> taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> Ok value
        | None -> Error "Puzzle answer not found")


let getState (stateName: StateName) = //! Type inference legitamitely didn't work on this until I used the pipeline operator
    states |> List.find (fun state -> state.name = StateName.toString stateName)

let getPuzzleAnswerState dbConnection : Task<Result<State, string>> =
    //! b6053e8: semi-interesting type error
    task {
        //Here: finish data wrangling
        let puzzleAnswer = getPuzzleAnswer dbConnection |> taskGet
        return puzzleAnswer |> Result.bind (fun a -> StateName.create a.name) |> Result.map getState
    }
let getPuzzleAnswerEconomy dbConnection : Task<AppResult<DtoOutStateEconomy>> =
    //! b6053e8: semi-interesting type error
    task {
        //Here: finish data wrangling
        let puzzleAnswer = getPuzzleAnswer dbConnection |> taskGet
        let state = getPuzzleAnswerState dbConnection |> taskGet

        return
            match (puzzleAnswer, state) with // Don't love the double result here
            | (Ok answer, Ok state) ->
                Ok
                    { economy = state.stateEconomy
                      totalGdp = answer.gdp }
            | _ -> Error internalErrorDto
    }

let getGuesses puzzleSessionId (dbConnection: DbConnection) =
    select {
        for guess in guessTable do
            where (guess.puzzleSessionId = puzzleSessionId)
    }
    |> dbConnection.SelectAsync<Guess>

let getGuessCount puzzleSessionId (dbConnection: DbConnection) =
    getGuesses puzzleSessionId dbConnection |> taskMap Seq.length //Do not understand the typing issues here

let getPuzzleSession puzzleSessionId (dbConnection: DbConnection) =
    select {
        for puzzleSession in puzzleSessionTable do
            where (puzzleSession.id = puzzleSessionId)
    }
    |> dbConnection.SelectAsync<PuzzleSession>
    |> getOneFromQuery


    let postPuzzleSession (dbConnection: DbConnection) =
    let guid = Guid.NewGuid().ToString()
    let time = DateTime.Now

    insert {
        into puzzleSessionTable

        value
            { id = guid
              lastRequestTimestamp = Option.None
              createdAt = time
              updatedAt = time }
    }
    |> dbConnection.InsertAsync
    |> _.Wait()

    { id = guid }

let postGuess (guessSubmission: DtoInGuessSubmission) (dbConnection: DbConnection) =
    let puzzleSession = getPuzzleSession guessSubmission.id dbConnection |> taskGet
    let guessState = StateName.create guessSubmission.guessStateName |> Result.map getState
    let guesses =
        puzzleSession
        |> Result.map (fun session -> getGuesses session.id dbConnection |> taskGet)
    let puzzleAnswerState = getPuzzleAnswerState dbConnection |> taskGet
    // lmao implement request timestamp validation
     
    //! 1)  Understand Haskell's love of infix operators, this is getting time consuming with these `ModuleName.function`  2) Can be difficult to know when you're whitespacing correctly on long statements
    let validationErrors =
        Option.None
        |> Option.orElseWith (fun _ -> puzzleSession |> validationAppResultOption 404 "`puzzleSession` not found")
        |> Option.orElseWith (fun _ ->
            guessState|> validationAppResultOption 422 $"State '{guessSubmission.guessStateName}' does not exist")
        |> Option.orElseWith (fun _ ->
            validationBoolOption
                (guesses |> Result.exists (fun guesses -> Seq.length guesses >= MAX_GUESSES))
                (getAppErrorDto 422 "Too many requests have been made for this game"))
        |> Option.orElseWith (fun _ ->
            validationBoolOption
                (guesses
                 |> Result.exists (fun guesses ->
                     guesses
                     |> Seq.exists (fun guess -> guess.stateName = guessSubmission.guessStateName)))
                (getAppErrorDto 422 "Duplicate of previous request"))

    //! STARTHERE option for the validation, result for the StateName type

    match (puzzleSession, guessState, puzzleAnswerState, validationErrors) with
    | (Ok session, Ok guess, Ok answer, None) ->
        let distance = haversineDistance guess answer
        let maxDistance = states |> List.map (fun state -> haversineDistance guess state) |> List.max
        
        update {
            for puzzleSession in puzzleSessionTable do
            setColumn puzzleSession.lastRequestTimestamp (Some guessSubmission.requestTimestamp)
            where (puzzleSession.id = session.id)
        } |> dbConnection.UpdateAsync |> _.Wait()
        let time = DateTime.Now    
        insert {
            into guessTable
            value {id=Guid.NewGuid.ToString(); puzzleSessionId = session.id; stateName = guess.name; createdAt =  time; updatedAt = time }
        } |> dbConnection.InsertAsync |> _.Wait()
       
        Ok {id=session.id; distance=distance; bearing = haversineBearing guess answer; percentileScore = (100.0 * (1.0 - distance / maxDistance) )|> Math.Round }
    | (_, _, _, Some validationError) -> Error validationError
    | _ -> Error internalErrorDto
    
let deleteObsoletePuzzleSessions (dbConnection: DbConnection) =
    let obsoleteDate = DateTime.Now.Subtract ( TimeSpan(0, 1, 0) )
    delete {
        for puzzleSession in puzzleSessionTable do
            where (puzzleSession.createdAt < obsoleteDate)
    } |> dbConnection.DeleteAsync 
    
    
let deleteObsoletePuzzleAnswers (dbConnection: DbConnection) =
    
    let puzzleAnswerCount = select {
                for puzzleAnswer in puzzleAnswerTable do selectAll
                            }
                            |> dbConnection.SelectAsync<PuzzleAnswer>
                            |> taskMap Seq.length
                            |> taskGet

    let obsoletePuzzleAnswerCount = puzzleAnswerCount - PUZZLE_ANSWER_RETENTION + 1
    
    if obsoletePuzzleAnswerCount > 0 then
        delete {
            for puzzleAnswer in puzzleAnswerTable do
                where (puzzleAnswer.id <= obsoletePuzzleAnswerCount)
        } |> dbConnection.DeleteAsync |> taskGet |> ignore
  
    // The commented pieces aren't possivle, this is a sign I don't understand something!
    //  
    // let updatePuzzleAnswer (puzzleAnswer: PuzzleAnswer) =
    //     {id=puzzleAnswer.id-obsoletePuzzleAnswerCount; name=puzzleAnswer.name; gdp=puzzleAnswer.gdp}
    // 
    // update {
    //     for puzzleAnswer in puzzleAnswerTable do
    //         set (updatePuzzleAnswer puzzleAnswer)
    //     } |> ignore
    
    dbConnection.Execute($"UPDATE puzzle_sessions SET id = id - {obsoletePuzzleAnswerCount}") |> ignore
     

let updateTargetState (dbConnection: DbConnection) =
    let unselectableTargetStateNames =
                   select {
                            for puzzleAnswer in puzzleAnswerTable do
                                selectAll
                   } // What is done beloew should really be done by the type mapper instead
                   |> dbConnection.SelectAsync<PuzzleAnswer> 
                   |> taskMap (fun Seq.map _.name 
                   |> taskGet
                   
    0