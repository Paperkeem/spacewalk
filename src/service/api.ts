import axios from "axios";

export const owner = "facebook";
export const repo = "react";

export type StateProps = "open" | "all" | "closed" | undefined;
export type SortProps = "comments" | "updated" | "created" | undefined;

export const getIssuesWithAxios = async (
  state: StateProps = "all",
  sort: SortProps = "created",
  page: number = 1
) => {
  try {
    const params = handleParseUrl({
      state,
      sort,
      direction: "desc",
      page,
      per_page: 10,
    });
    const response = await axios.get(
      `https://api.github.com/repos/facebook/react/issues${params}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOneIssue = async (issueId: number) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/facebook/react/issues/${issueId}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleParseUrl = <T extends Record<string, any>>(filter: T) => {
  let queryParameters: string = ``;

  const filterArray = Object.entries(filter);

  filterArray
    .filter((item: string[]) => {
      return item[1] !== undefined && item[1] !== "";
    })
    .forEach((item: string[], index: number) => {
      queryParameters += index === 0 ? "?" : "&";
      queryParameters += `${item[0]}=${encodeURIComponent(item[1])}`;
    });

  return queryParameters;
};
