import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <Wrapper $padding="32px 20px 0px 20px" $height="72px"></Wrapper>
    </>
  );
}

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
