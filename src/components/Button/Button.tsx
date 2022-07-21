import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./Button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    background: "orange" | "blue";
    color: "white" | "blue";
  };

export function Button({ children, background, color }: ButtonProps) {
  return (
    <S.Container background={background} color={color}>
      {children}
    </S.Container>
  );
}
