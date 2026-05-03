import { useMutation, useQuery } from "@tanstack/react-query";

import { GuessSubmissionRequest } from "./model";
import {
  getPuzzleAnswer,
  getTargetStateEconomy,
  postGuessSubmission,
  postPuzzleSession,
} from "./rest";

export function useEconomyQuery() {
  return useQuery({
    queryKey: ["economy"],
    queryFn: getTargetStateEconomy,
    staleTime: Infinity, // Keep cached indefinitely since it changes daily
  });
}

export function useAnswerQuery(id: string, enabled: boolean) {
  return useQuery({
    queryKey: ["answer", id],
    queryFn: () => getPuzzleAnswer(id),
    enabled,
    staleTime: Infinity,
  });
}

export function useSubmitGuessMutation() {
  return useMutation({
    mutationFn: (request: GuessSubmissionRequest) =>
      postGuessSubmission(request),
  });
}

export function usePuzzleSessionMutation() {
  return useMutation({
    mutationFn: postPuzzleSession,
  });
}
