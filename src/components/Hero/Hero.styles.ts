import styled, { css } from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem 2rem;
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 180px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    h1 {
      color: ${theme.colors.orange};
      font-size: 3.125rem;
      margin-top: 2rem;

      @media (max-width: 1440px) {
        font-size: 2.5rem;
      }

      @media (max-width: 980px) {
        font-size: 2rem;
      }

      @media (max-width: 800px) {
        font-size: 1.75rem;
      }

      p {
        color: ${theme.colors.darkBlue};
        font-size: 1.25rem;
        font-weight: ${theme.fonts.weight.normal};

        @media (max-width: 1240px) {
          font-size: 1.15rem;
        }

        @media (max-width: 980px) {
          font-size: 1rem;
        }
      }
    }

    strong {
      font-weight: ${theme.fonts.weight.bold};
    }
  `}
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  max-width: 780px;
  max-height: 632px;
  height: 100%;
  width: 100%;
  background-image: url("/images/hero-image.svg");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1440px) {
    position: relative;
    background-size: contain;
    background-position: right;
  }

  @media (max-width: 800px) {
    background-position: center;
  }

  @media (max-width: 610px) {
    background-position: right;
  }
`;
