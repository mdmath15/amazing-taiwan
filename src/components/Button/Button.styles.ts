/* eslint-disable no-shadow */
import styled, { css } from "styled-components";

import { theme } from "@styles/theme";

interface ContainerProps {
  background: "orange" | "blue";
  color: "blue" | "white";
  withGlow?: boolean;
}

const buttonColors = {
  orange: theme.colors.orange,
  blue: theme.colors.darkBlue,
  white: theme.colors.white,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, background, color, withGlow }) => css`
    background: ${buttonColors[background]};
    width: max-content;
    height: 42px;
    padding: 0.5rem 2rem;
    border: 0;
    border-radius: 42px;
    color: ${buttonColors[color]};
    font-weight: ${theme.fonts.weight.bold};
    transition: 200ms;
    ${withGlow && "box-shadow: 0 5px 15px rgba(255, 87, 0, 0.4);"}
    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
