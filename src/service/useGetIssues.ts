import { useQuery } from "@tanstack/react-query";
import { SortProps, StateProps, getIssuesWithAxios } from "./api";

export default function useGetIssues(
  state?: StateProps,
  sort?: SortProps,
  page?: number
) {
  return useQuery({
    queryKey: queryKey.all(state, sort, page),
    queryFn: () => getIssuesWithAxios(state, sort, page),
  });
}

export const queryKey = {
  all: (state?: StateProps, sort?: SortProps, page?: number) =>
    ["github-issue", state, sort, page] as const,
  detail: (issueId: number) => ["github-issue", issueId],
};
