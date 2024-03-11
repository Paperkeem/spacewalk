/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  list: any;
  currentPage: number;
}

export function DataGrid({ list, currentPage }: Props) {
  return (
    <Container>
      <TextContainer $backgroundColor="#F5F8FA" $borderRadius="8px">
        <GridText>번호</GridText>
        <GridText $textWidth="421px">제목</GridText>
        <GridText $textWidth="120px">작성자</GridText>
        <GridText $textWidth="90px">작성일</GridText>
        <GridText $textWidth="90px">수정일</GridText>
        <GridText $textAlign="right">코멘트 수</GridText>
      </TextContainer>

      {list?.map((item: any, index: number) => (
        <Link key={item.id} to={`/issue/${item.number}`}>
          <TextContainer $isHover>
            <GridText>{index + 1 + (currentPage - 1) * 10}</GridText>
            <GridText $textWidth="421px">{item.title}</GridText>
            <GridText $textWidth="120px">{item.user.login}</GridText>
            <GridText $textWidth="90px">
              {item.created_at.slice(0, 10)}
            </GridText>
            <GridText $textWidth="90px">
              {item.updated_at.slice(0, 10)}
            </GridText>
            <GridText $textAlign="right">{item.comments}</GridText>
          </TextContainer>
        </Link>
      ))}
    </Container>
  );
}

export const Container = styled.main`
  width: 1080px;
  height: 424px;
  padding: 24px 20px 0px 20px;
`;

export const TextContainer = styled.section<{
  $backgroundColor?: string;
  $borderRadius?: string;
  $isHover?: boolean;
}>`
  width: 1024px;
  display: flex;
  align-items: center;
  gap: 35px;
  height: 36px;
  padding: 6px 12px 6px 12px !important;

  background-color: ${(props) => props.$backgroundColor ?? ""};
  border-radius: ${(props) => props.$borderRadius ?? ""};

  cursor: ${(props) => (props.$isHover ? "pointer" : "")};
`;

export const GridText = styled.div<{
  $textWidth?: string;
  $textAlign?: string;
}>`
  font-family: Pretendard;
  font-style: medium;
  font-weight: 500;
  font-size: 14px !important;
  text-align: ${(props) => props.$textAlign ?? "left"};
  line-height: 20px;
  color: #5a6066;

  width: ${(props) => props.$textWidth ?? "60px"};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
