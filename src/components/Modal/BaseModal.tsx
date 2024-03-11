import { styled } from "styled-components";
import ModalPortal from "./ModalPotal";

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BaseModal({ title, isOpen, onClose, children }: Props) {
  return (
    <ModalPortal>
      {isOpen && (
        <Overlay>
          <ModalContainer>
            <ModalBody>
              <ModalHeader>{title}</ModalHeader>
              {children}
            </ModalBody>
          </ModalContainer>
        </Overlay>
      )}
    </ModalPortal>
  );
}

export const Overlay = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #0000004d;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 10;
  margin: 50vh 30vw;
  transform: translateY(-50%);
`;

export const ModalHeader = styled.div`
  width: 390px;
  height: 70px;
  padding: 24px 20px 20px 20px;

  font-family: Pretendard;
  font-weight: 700;
  font-size: 18px !important;
  line-height: 26px;
`;

export const ModalBody = styled.div`
  width: 390px;
  height: 100%;
  z-index: 10;
  border-radius: 16px;
  background-color: #ffffff;
`;
