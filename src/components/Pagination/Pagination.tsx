import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  postsNum: number;
  postsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export function Pagination({
  postsNum,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: Props) {
  const pageList = [];
  const totalPages = Math.ceil(postsNum / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (totalPages === 1) {
    return null;
  }

  return (
    <Container>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        <MdOutlineKeyboardArrowLeft size={24} color={"#7b848c"} />
      </button>

      {pageList.map((page) => (
        <Button
          key={page}
          onClick={() => setCurrentPage(page)}
          $buttonColor={currentPage === page ? "#F0F4F7" : ""}
        >
          <ButtonText $selected={currentPage === page}>{page}</ButtonText>
        </Button>
      ))}

      <button onClick={goToNextPage} disabled={currentPage === pageList.length}>
        <MdOutlineKeyboardArrowRight size={24} color={"#7b848c"} />
      </button>
    </Container>
  );
}

export const Container = styled.section`
  width: 1080px;
  height: 60px;
  padding: 24px 0px 0px 0px;

  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Button = styled.button<{ $buttonColor?: string }>`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  padding: 6px;
  background-color: ${(props) => props.$buttonColor ?? ""};
`;

export const ButtonText = styled.p<{ $selected?: boolean }>`
  font-family: Pretendard;
  font-style: bold;
  font-weight: 700;
  font-size: 16px !important;
  color: ${(props) => (props.$selected ? "#14171A" : "#7b848c")};
  line-height: 24px;
`;
