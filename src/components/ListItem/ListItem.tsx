import { useId, useState } from "react";
import styled from "styled-components";
import { SortProps } from "../../service/api";
import { GoCheck } from "react-icons/go";

interface Props {
  value: Record<string, string>;
  search: SortProps | undefined;
  onChange?: (val: SortProps, type?: "issue" | "filter") => void;
  onClose?: () => void;
}

export default function ListItem({ value, search, onChange, onClose }: Props) {
  const [selectedValue, setSelectedValue] = useState<SortProps>(search);

  const handleFilterValueClick = (val: SortProps) => {
    setSelectedValue(val);
    onClose?.();
    onChange?.(val as SortProps, "filter");
  };

  return (
    <>
      <Wrapper $height="180px">
        <ListContainer>
          {Object.entries(value)?.map(([key, value]) => (
            <RadioList
              key={useId()}
              onClick={() => handleFilterValueClick(key as SortProps)}
            >
              <FlexBox>
                {value}
                {selectedValue === key && (
                  <GoCheck size={24} color={"#1A8CFF"} />
                )}
              </FlexBox>
            </RadioList>
          ))}
        </ListContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div<{ $height?: string }>`
  width: 350px;
  height: ${(props) => props.$height ?? "140px"};
`;

const ListContainer = styled.div<{ $margin?: string }>`
  width: 390px;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const RadioList = styled.div`
  height: 56px;
  padding: 15px 20px;
  gap: 10px;

  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;
