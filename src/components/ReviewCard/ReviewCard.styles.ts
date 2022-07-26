import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 400px;
    width: 100%;
    background: ${theme.colors.white};
    display: grid;
    grid-template-columns: 66px 1fr;
    gap: 1rem;
    padding: 2rem 1.25rem;
    border-radius: 1.25rem;

    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-template-rows: 66px 1fr;
    }

    @media (max-width: 620px) {
      grid-template-columns: 66px 1fr;
      grid-template-rows: 1fr;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      h2 {
        font-size: 1.5rem;
        color: ${theme.colors.darkBlue};

        @media (max-width: 1220px) {
          font-size: 1rem;
        }
      }

      p {
        color: ${theme.colors.darkBlue};
        flex: 1;

        @media (max-width: 1220px) {
          font-size: 0.875rem;
        }
      }
    }
  `}
`;

export const AuthorName = styled.span`
  ${({ theme }) => css`
    padding: 2rem 0 0;
    font-size: 1.125rem;
    color: ${theme.colors.darkBlue};
    font-weight: ${theme.fonts.weight.bold};

    @media (max-width: 1220px) {
      font-size: 1rem;
    }
  `}
`;
