import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem 2rem;
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 2rem;

    hr {
      border-color: ${theme.colors.white};
      width: 100%;
      grid-column: 1 / -1;
      margin-top: 1rem;
    }

    p {
      color: ${theme.colors.white};
      grid-column: 1 / -1;
      text-align: center;
      font-weight: 400;
    }
  `}
`;

export const SocialContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h3 {
      color: ${theme.colors.white};
    }
  `}
`;
