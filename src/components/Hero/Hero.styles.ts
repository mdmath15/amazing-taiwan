import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    h1 {
      color: ${theme.colors.darkBlue};
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
  span {
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
      margin-right: 2rem;
    }

    @media (max-width: 800px) {
      margin-right: none;
      background-position: center;
    }
  }
`;

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
    justify-items: center;
    padding: 4rem 2rem;
  }

  @media (max-width: 800px) {
    justify-items: normal;
  }
`;
