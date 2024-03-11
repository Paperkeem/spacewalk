import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import { filterObj, issueObj } from "../../screens/HomePage";

interface Props {
  title: string | undefined;
  variant?: "nomal" | "blue";
  isBorder?: boolean;
  onClick: () => void;
}

export default function FilterButton({
  title,
  variant = "nomal",
  isBorder = false,
  onClick,
}: Props) {
  const parseTitle = (title: string) => {
    const obj = { ...filterObj, ...issueObj };
    let findTitle;
    Object.entries(obj).forEach(([key, value]) => {
      if (key === title) {
        if (value === "전체") {
          return (findTitle = "이슈 상태");
        }
        return (findTitle = value);
      }
    });
    return findTitle;
  };

  return (
    <Button $border={isBorder} onClick={onClick}>
      <ButtonText $variant={variant}>{parseTitle(title ?? "")}</ButtonText>
      <MdOutlineKeyboardArrowDown
        size={24}
        color={variant === "blue" ? "#1A8CFF" : ""}
      />
    </Button>
  );
}

export const Button = styled.button<{
  $border?: boolean;
}>`
  width: 102px;
  height: 40px;
  border-radius: 42px;
  border: ${(props) => (props.$border ? "1px solid #DFE5EB" : "0px")};
  padding: 8px 8px 8px 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.$border ? "" : "#5a6066")};
`;
export const ButtonText = styled.p<{
  $variant: "nomal" | "blue";
}>`
  color: ${(props) => (props.$variant === "blue" ? "#1A8CFF" : "#14171A")};
  font-weight: ${(props) => (props.$variant === "blue" ? "700" : "500")};
`;
