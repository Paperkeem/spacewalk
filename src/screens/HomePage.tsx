import { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "../components/DataGrid/DataGrid";
import { Pagination } from "../components/Pagination/Pagination";
import useGetIssues from "../service/useGetIssues";
import FilterButton from "../components/FilterButton/FilterButton";
import BaseModal from "../components/Modal/BaseModal";
import RadioButton from "../components/RadioButton/RadioButton";
import ListItem from "../components/ListItem/ListItem";
import { SortProps, StateProps } from "../service/api";

interface Props {
  issue: StateProps;
  filter: SortProps;
}

export default function HomePage() {
  const [openIsuue, setOpenIsuue] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState<Props>({
    issue: "all",
    filter: "created",
  });
  const { data } = useGetIssues(search.issue, search.filter, currentPage);

  const handleChange = (
    val: StateProps | SortProps,
    type?: "issue" | "filter"
  ) => {
    if (type === "filter") {
      return setSearch((prev) => ({
        ...prev,
        filter: val as SortProps,
      }));
    }

    setSearch((prev) => ({
      ...prev,
      issue: val as StateProps,
    }));
  };

  return (
    <>
      <Wrapper $padding="32px 20px 0px 20px" $height="72px">
        <FilterButton
          title={search.issue}
          variant={search.issue == "all" ? "nomal" : "blue"}
          isBorder
          onClick={() => setOpenIsuue(true)}
        />
        <FilterButton
          title={search.filter}
          onClick={() => setOpenFilter(true)}
        />
      </Wrapper>

      <DataGrid list={data} currentPage={currentPage} />
      <Pagination
        postsNum={50}
        postsPerPage={10}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <BaseModal
        title="이슈 상태"
        isOpen={openIsuue}
        onClose={() => setOpenIsuue(false)}
      >
        <RadioButton
          value={issueObj}
          search={search.issue}
          onChange={handleChange}
          onClose={() => setOpenIsuue(false)}
        />
      </BaseModal>

      <BaseModal
        title="정렬"
        isOpen={openFilter}
        onClose={() => setOpenFilter(false)}
      >
        <ListItem
          value={filterObj}
          search={search.filter}
          onChange={handleChange}
          onClose={() => setOpenFilter(false)}
        />
      </BaseModal>
    </>
  );
}

export const issueObj = { all: "전체", open: "open", closed: "closed" };
export const filterObj = {
  created: "작성일 순",
  updated: "수정일 순",
  comments: "코멘트 순",
};

export const Wrapper = styled.div<{
  $width?: string;
  $height?: string;
  $padding?: string;
}>`
  width: ${(props) => props.$width ?? "1080px"};
  height: ${(props) => props.$height ?? "36px"};
  padding: ${(props) => props.$padding ?? ""};

  display: flex;
  justify-content: space-between;
`;
