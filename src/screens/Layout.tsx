import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <Main>
      <Title $padding="0px 20px 12px 20px">김종이</Title>
      <Border />
      <Title
        $padding="32px 20px 0px 20px"
        $height="63px"
        $textSize="20px"
        $textColor="#14171A"
      >
        이슈정리
      </Title>

      <Outlet />
    </Main>
  );
}

export const Main = styled.main`
  width: 1200px;
  padding: 72px 60px 72px 60px;
`;

export const Border = styled.div`
  width: 1020px;
  height: 1px;
  margin-left: 20px;
  border-bottom: 0.5px solid #7b848c;
`;

export const Title = styled.div<{
  $padding?: string;
  $height?: string;
  $textSize?: string;
  $textColor?: string;
}>`
  width: 1080px;
  height: ${(props) => props.$height ?? "36px"};
  padding: ${(props) => props.$padding ?? ""};

  font-family: Pretendard;
  font-weight: 700;
  font-size: ${(props) => props.$textSize ?? "16px"};
  line-height: 24px;
  color: ${(props) => props.$textColor ?? "#7b848c"};
`;
