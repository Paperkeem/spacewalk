import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: Props) {
  return <DefaultButton onClick={onClick}>{children}</DefaultButton>;
}

export const DefaultButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  padding: 12px 16px;
  gap: 10px;

  background-color: #1a8cff;
  color: #ffffff;

  font-family: Pretendard;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
