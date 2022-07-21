import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 0 0 8rem 0;
    background: url("/images/wave-top.svg") no-repeat bottom;
    background-size: contain;

    section {
      max-width: 1280px;
      margin: 0 auto;
      padding: 10rem 2rem;
      background: url("/images/hero-image.svg") no-repeat right;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      h1 {
        color: ${theme.colors.darkBlue};
        font-size: 3.125rem;
        margin-top: 2rem;
      }

      p {
        color: ${theme.colors.darkBlue};
        font-size: 1.25rem;
        font-weight: ${theme.fonts.weight.normal};
      }

      strong {
        font-weight: ${theme.fonts.weight.bold};
      }

      button {
        box-shadow: 0 5px 15px rgba(255, 87, 0, 0.4);
      }
    }
  `}
`;
