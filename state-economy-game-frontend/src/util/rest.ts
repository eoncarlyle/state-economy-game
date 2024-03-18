import { GameId, GuessSubmissionResponse, PuzzleAnswerResponse, EconomyResponse } from "state-economy-game-util/model";
import { GuessSubmissionRequest } from "state-economy-game-util/model";

export function getBaseUrl() {
  return import.meta.env.VITE_API_DOMAIN;
}

//TODO: Implement a sane retry policy (3x?) for these rest functions, Issue #20
export async function getTargetStateEconomy() {
  const response = await getResponse("/economy", "GET")
  return await handleResponse<EconomyResponse>(response)
}

export async function postGameId() {
  const response = await getResponse("/gameId", "POST")
  return await handleResponse<GameId>(response)
}

export async function postGuessSubmission(guessSubmissionRequest: GuessSubmissionRequest) {
  const response = await getResponse("/guess", "POST", guessSubmissionRequest)
  return await handleResponse<GuessSubmissionResponse>(response);
}

export async function getPuzzleAnswer(id: string) {
  const response = await getResponse(`/answer/${id}`, "GET")
  return await handleResponse<PuzzleAnswerResponse>(response);
} 

async function handleResponse<T>(response: Response | null) {
  if (!response) {
    return response
  } else if (response.ok) {
    try {
      const responseBody: T = await response.json()
      return responseBody
    } catch (e: any) {
      console.log(`Bad JSON payload recieved: ${response}`)
      return null
    }
  } else {
    console.log(`Bad response recieved: ${response}`)
    return null
  }
}

async function getResponse(requestSubpath: string, method: string, body?: object) {
  try {
    if (body) {
      return fetch(getBaseUrl() + requestSubpath, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

    } else {
      return fetch(getBaseUrl() + requestSubpath, {
        method: method,
      });
    }
  } catch (e: any) {
    console.log(`Fetch failed: ${e}`)
    return null
  }
}
