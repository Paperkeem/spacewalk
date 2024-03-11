import { useEffect, useState } from "react";
import ReactDom from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("modal"));
  }, []);

  if (!element) {
    return <></>;
  }

  return ReactDom.createPortal(children, element);
};

export default ModalPortal;
