import styled, { css } from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem 2rem;
  }

  @media (max-width: 860px) {
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 180px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    padding: 4rem 0 0 0rem;
    font-size: 2.25rem;
    text-align: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 860px) {
      padding: 0 0 1rem;
    }

    p {
      font-size: 1.35rem;
      font-weight: ${theme.fonts.weight.normal};

      @media (max-width: 1440px) {
        font-size: 1.25rem;
      }

      @media (max-width: 1184px) {
        font-size: 1rem;
      }
    }

    span {
      color: ${theme.colors.orange};
      font-weight: ${theme.fonts.weight.bold};
    }

    strong {
      font-weight: ${theme.fonts.weight.bold};
    }
  `}
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  max-width: 593px;
  max-height: 575px;
  height: 100%;
  width: 100%;
  background-image: url("/images/about-us-image.svg");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1440px) {
    position: relative;
    background-size: contain;
    background-position: right;
  }

  @media (max-width: 860px) {
    background-position: center;
  }
`;
