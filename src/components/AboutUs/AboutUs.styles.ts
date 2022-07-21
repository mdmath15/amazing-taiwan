import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 0 0 4rem 0;
    background: url("/wave-bottom.svg") no-repeat top;
    background-size: contain;
    position: relative;
    top: -4px;

    h1 {
      color: ${theme.colors.darkBlue};
      padding: 16rem 0 0 0;
      font-size: 2.25rem;
      text-align: center;
    }

    section {
      height: 600px;
      max-width: 1280px;
      margin: 0 auto;
      padding: 6rem 2rem 4rem;
      background: url("/images/about-us.svg") no-repeat right;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1rem;

      p {
        font-size: 1.5rem;
        font-weight: ${theme.fonts.weight.normal};
      }

      span {
        color: ${theme.colors.darkBlue};
        font-weight: ${theme.fonts.weight.bold};
      }

      strong {
        font-weight: ${theme.fonts.weight.bold};
      }
    }
  `}
`;
