import styled, { css, keyframes } from "styled-components";

interface HeaderProps {
  headerSticky: boolean;
  active: boolean;
}

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.header<HeaderProps>`
  ${({ theme, headerSticky }) => css`
    height: 5.75rem;
    border-bottom: 1px solid ${theme.colors.opacityBlack};
    position: sticky;
    top: 0;
    z-index: 9999;
    background: ${headerSticky ? theme.colors.orange : theme.colors.white};

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
  ${({ theme, headerSticky, active }) => css`
    display: flex;
    align-items: center;

    ul {
      display: flex;
      color: ${headerSticky ? theme.colors.white : theme.colors.darkBlue};
      font-weight: ${theme.fonts.weight.bold};
      justify-content: center;
      align-items: center;

      @media (max-width: 750px) {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 80px;
        right: 0px;
        opacity: ${active ? 1 : 0};
        display: ${active ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding-top: 20vh;
        background-color: ${theme.colors.orange};
        animation: ${active ? FadeIn : FadeOut} 0.3s ease-in-out;
      }

      li {
        + li {
          margin-left: 4rem;

          @media (max-width: 750px) {
            margin-left: 0;
          }
        }

        &:hover {
          font-weight: ${theme.fonts.weight.bold};
        }

        @media (max-width: 750px) {
          padding: 2rem 0;
          font-size: 1.5rem;
        }

        button {
          margin-left: 5rem;

          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
            rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

          @media (max-width: 750px) {
            margin-left: 0;
          }
        }
      }
    }
  `}
`;

export const Menu = styled.button<HeaderProps>`
  display: none;

  @media (max-width: 756px) {
    display: block;
    background: none;

    span {
      display: block;
      width: 2rem;
      height: 3px;
      background-color: ${({ theme, headerSticky }) =>
        headerSticky ? theme.colors.white : theme.colors.orange};
      margin: 6px 0;
      transition: 0.4s ease-in-out;
    }
  }
  ${({ active }) =>
    active &&
    css`
      span:first-child {
        -webkit-transform: rotate(-45deg) translate(-5px, 5px);
        transform: rotate(-45deg) translate(-5px, 5px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
    `}
`;
