import {
  GlobalState,
  GoneResponse,
  GuessSubmissionRequest,
  GuessSubmissionResponse,
  IPuzzleSession,
  PuzzleAnswerResponse,
  StateEconomy,
} from "./model.ts";

export function getBaseUrl() {
  return import.meta.env.VITE_API_DOMAIN;
}

//TODO: Implement a sane retry policy (3x?) for these rest functions, Issue #20
export async function getTargetStateEconomy() {
  const response = await getResponse("/economy", "GET");
  return await handleResponse<StateEconomy>(response);
}

export async function postPuzzleSession() {
  const response = await getResponse("/puzzle_session", "POST");
  return await handleResponse<IPuzzleSession>(response);
}

export async function postGuessSubmission(
  guessSubmissionRequest: GuessSubmissionRequest,
) {
  const response = await getResponse("/guess", "POST", guessSubmissionRequest);
  return await handleDaySpecificResponse<GuessSubmissionResponse>(response);
}

export async function getPuzzleAnswer(id: string) {
  const response = await getResponse(`/answer/${id}`, "GET");
  return await handleDaySpecificResponse<PuzzleAnswerResponse>(response);
}

async function handleResponse<T>(response: Response | null) {
  if (!response) {
    return response;
  } else if (response.ok) {
    try {
      const responseBody: T = await response.json();
      return responseBody;
    } catch (e: any) {
      console.log(`Bad JSON payload recieved: ${response}`);
      return null;
    }
  } else {
    console.log(`Bad response recieved: ${JSON.stringify(response)}`);
    return null;
  }
}

//TODO Roll both responses together
async function handleDaySpecificResponse<T>(
  response: Response | null,
): Promise<T | GoneResponse | null> {
  if (!response) {
    return response;
  } else if (response.ok) {
    try {
      const responseBody: T = await response.json();
      return responseBody;
    } catch (e: any) {
      console.log(`Bad JSON payload recieved: ${JSON.stringify(response)}`);
      return null;
    }
  } else if (response.status === 410) {
    return {
      message: "Target puzzle is now gone",
      statusCode: 410,
      type: "GoneResponse",
    };
  } else {
    console.log(`Bad response recieved: ${JSON.stringify(response)}`);
    return null;
  }
}

async function getResponse(
  requestSubpath: string,
  method: string,
  body?: object,
) {
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
    console.log(`Fetch failed: ${e}`);
    return null;
  }
}
