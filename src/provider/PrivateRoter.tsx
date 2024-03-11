import { useLayoutEffect } from "react";

interface PrivateRoterProps {
  children: React.ReactNode;
}

export default function PrivateRoter({ children }: PrivateRoterProps) {
  useLayoutEffect(() => {
    if (window.location.pathname === "/") {
      window.location.pathname = "/home";
    }
  }, []);

  return <>{children}</>;
}
