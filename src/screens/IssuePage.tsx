import { useParams } from "react-router-dom";
import useGetIssueDetail from "../service/useGetIssueDetail";
import styled from "styled-components";

export default function IssuePage() {
  const { issueId } = useParams();
  const { data } = useGetIssueDetail(Number(issueId));

  return (
    <Wrapper>
      <Text>{data?.title}</Text>
      <PreText>{data?.body}</PreText>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 1020px;
  padding: 32px 20px 0px 20px;
`;

const Text = styled.p`
  padding: 8px 6px;
  background-color: #e1e2e3;
  border-radius: 8px;

  font-size: 20px;
`;

const PreText = styled.pre`
  white-space: pre-wrap;
`;
