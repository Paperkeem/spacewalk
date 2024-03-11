import { styled } from "styled-components";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Main>
      <p>404 페이지 입니다.</p>
      <ButtonWrapper>
        <Button onClick={() => navigate("/home")}>홈으로 돌아가기</Button>
      </ButtonWrapper>
    </Main>
  );
}

export const Main = styled.main`
  width: 100%;
  padding-top: 10%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  width: 300px;
  margin-top: 30px;
`;
