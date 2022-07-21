import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.darkBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;

    h1 {
      color: ${theme.colors.white};
      font-size: 2.25rem;
      text-align: center;
      padding: 2rem 0 1rem;
      transition: shadow 0.3s ease-in-out;
    }
  `}
`;
