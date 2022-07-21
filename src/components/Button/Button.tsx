/* eslint-disable react/require-default-props */
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./Button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    background: "orange" | "blue";
    color: "white" | "blue";
    withGlow?: boolean;
  };

export function Button({ children, background, color, withGlow }: ButtonProps) {
  return (
    <S.Container background={background} color={color} withGlow={withGlow}>
      {children}
    </S.Container>
  );
}
