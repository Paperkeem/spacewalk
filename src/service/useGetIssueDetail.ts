import { useQuery } from "@tanstack/react-query";
import { getOneIssue } from "./api";
import { queryKey } from "./useGetIssues";

export default function useGetIssueDetail(issueId: number) {
  return useQuery({
    queryKey: queryKey.detail(issueId),
    queryFn: () => getOneIssue(issueId),
  });
}
