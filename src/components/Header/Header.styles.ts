import styled, { css } from "styled-components";

interface HeaderProps {
  headerSticky: boolean;
}

export const Container = styled.header<HeaderProps>`
  ${({ theme, headerSticky }) => css`
    height: 5.75rem;
    border-bottom: 1px solid ${theme.colors.opacityBlack};
    position: sticky;
    top: 0;
    z-index: 9999;
    background: ${headerSticky ? theme.colors.white : "transparent"};

    transition: background-color 0.3s ease-in-out;
    transform-style: flat;

    div {
      max-width: 1280px;
      height: 5.75rem;
      margin: 0 auto;
      padding: 0 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;

export const NavContainer = styled.nav<HeaderProps>`
  ${({ theme, headerSticky }) => css`
    display: flex;
    align-items: center;

    ul {
      display: flex;
      color: ${headerSticky ? theme.colors.white : theme.colors.darkBlue};
      font-weight: ${theme.fonts.weight.bold};

      li {
        + li {
          margin-left: 4rem;
        }
        &:hover {
          font-weight: ${theme.fonts.weight.bold};
        }
      }
    }

    button {
      margin-left: 5rem;

      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }
  `}
`;
