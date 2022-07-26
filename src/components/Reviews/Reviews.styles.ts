import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    background: ${theme.colors.white};
    margin: 0 0 8rem;

    section {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      padding: 0 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4rem;

      h1 {
        text-align: center;
        font-size: 2.25rem;
      }
    }
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1220px) {
    gap: 1rem;
  }
`;
