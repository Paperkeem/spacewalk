import { useId, useState } from "react";
import styled from "styled-components";
import { StateProps } from "../../service/api";
import Button from "../Button/Button";

interface Props {
  value: Record<string, string>;
  search: StateProps | undefined;
  onChange?: (val: StateProps, type?: "issue" | "filter") => void;
  onClose?: () => void;
}

export default function RadioButton({
  value,
  search,
  onChange,
  onClose,
}: Props) {
  const [selectedValue, setSelectedValue] = useState<StateProps>(search);

  const handleClick = (val: StateProps) => {
    setSelectedValue(val);
  };

  const handleSubmit = () => {
    onClose?.();
    onChange?.(selectedValue as StateProps, "issue");
  };

  return (
    <>
      <Wrapper>
        <Container $margin="0px 20px 32px 20px">
          {Object.entries(value)?.map(([key, value]) => (
            <Radio
              key={useId()}
              value={value}
              $selected={selectedValue === key}
              onClick={() => handleClick(key as StateProps)}
            >
              {value}
            </Radio>
          ))}
        </Container>

        <Container $margin="0px 20px 32px 20px">
          <Button onClick={handleSubmit}>적용</Button>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div<{ $height?: string }>`
  width: 350px;
  height: ${(props) => props.$height ?? "140px"};
`;

const Container = styled.div<{ $margin?: string }>`
  width: 350px;
  margin: ${(props) => props.$margin ?? ""};
  display: flex;
  justify-content: conter;
  gap: 8px;
`;

export const Radio = styled.button<{
  $selected?: boolean;
}>`
  height: 40px;
  padding: 10px 14px;
  gap: 4px;
  border: ${(props) =>
    props.$selected ? "1px solid #1A8CFF" : "1px solid #DFE5EB"};
  border-radius: 30px;
  background-color: ${(props) => (props.$selected ? "#1A8CFF" : "")};
  color: ${(props) => (props.$selected ? "#FFFFFF" : "#363B40")};

  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
