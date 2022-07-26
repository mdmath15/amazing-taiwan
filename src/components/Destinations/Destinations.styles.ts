import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.darkBlue};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem 1rem;

    h1 {
      color: ${theme.colors.white};
      font-size: 2.25rem;
      text-align: center;
      padding: 2rem 0 1rem;
      transition: shadow 0.3s ease-in-out;
    }
  `}
`;
