module StateEconomyGame.App

open System
open System.IO
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Cors.Infrastructure
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.Hosting
open Microsoft.Extensions.Logging
open Microsoft.Extensions.DependencyInjection
open Giraffe
open Quartz

open StateEconomyGame.Constants
open StateEconomyGame.Service
open StateEconomyGame.Controller




let errorHandler (ex: Exception) (logger: ILogger) =
    logger.LogError(ex, "An unhandled exception has occurred while executing the request.")
    clearResponse >=> setStatusCode 500 >=> text ex.Message

let configureCors (builder: CorsPolicyBuilder) =
    builder
        .WithOrigins(
            "https://gdple.iainschmitt.com",
            "https://www.gdple.iainschmitt.com",
            "http://localhost:5173",
            "http://localhost:4173"
        )
        .AllowAnyMethod()
        .AllowAnyHeader()
    |> ignore


let configureAppFactory (sqliteDbFileName: string) =
    let configureApp (app: IApplicationBuilder) =
        let env = app.ApplicationServices.GetService<IWebHostEnvironment>()

        (match env.IsDevelopment() with
         | true -> app.UseDeveloperExceptionPage()
         | false -> app.UseGiraffeErrorHandler(errorHandler).UseHttpsRedirection())
            .UseCors(configureCors)
            .UseStaticFiles()
            .UseGiraffe(webApp sqliteDbFileName)

    configureApp

let configureServices (services: IServiceCollection) =
    services.AddCors() |> ignore
    services.AddGiraffe() |> ignore
    services.AddQuartz() |> ignore

let configureLogging (builder: ILoggingBuilder) =
    builder.AddConsole().AddDebug() |> ignore

[<EntryPoint>]
let giraffeMain args =
    let configureApp = Array.item 0 args |> configureAppFactory

    let builder =
        Host
            .CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(fun webHostBuilder ->
                webHostBuilder
                    .UseUrls("http://localhost:5000")
                    .Configure(Action<IApplicationBuilder> configureApp)
                    .ConfigureServices(configureServices)
                    .ConfigureLogging(configureLogging)
                |> ignore)
            .Build()

    let schedulerFactory = builder.Services.GetRequiredService<ISchedulerFactory>()
    let scheduler = schedulerFactory.GetScheduler() |> _.Result

    let job =
        JobBuilder
            .Create<DailyJob>()
            .WithIdentity(DAILY_JOB_NAME)
            .UsingJobData(SQLITE_DB_FILE_NAME_KEY, Array.item 0 args)
            .Build()

    let trigger =
        TriggerBuilder
            .Create()
            .WithIdentity("trigger0", "group0")
            .WithSchedule(
                CronScheduleBuilder
                    .DailyAtHourAndMinute(0, 0)
                    .InTimeZone(TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time"))
            )
            .ForJob(DAILY_JOB_NAME)
            .Build()

    scheduler.ScheduleJob(job, trigger) |> _.Result |> ignore
    scheduler.Start() |> ignore
    builder.Run()
    0
