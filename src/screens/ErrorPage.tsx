import { styled } from "styled-components";

export default function ErrorPage() {
  return <Main>404 페이지 입니다.</Main>;
}

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding-top: 10%;
  text-align: center;
`;
