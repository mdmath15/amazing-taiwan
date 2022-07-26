import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 2rem 0rem;

    @media (max-width: 550px) {
      padding: 0 1rem 0rem;
    }

    section {
      max-width: 1248px;
      margin: 0 auto;
      margin-bottom: 4rem;
      height: 400px;
      padding: 0 4rem;
      background: ${theme.colors.darkBlue};
      background-image: url("/images/newsletter-image.svg");
      background-repeat: no-repeat;
      background-position: 130% 25%;
      border-radius: 1.25rem;
      overflow-x: hidden;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      @media (max-width: 1240px) {
        background-position: 150% 25%;
      }

      @media (max-width: 1120px) {
        background-size: contain;
        background-position: right;
      }

      @media (max-width: 940px) {
        background-size: 30%;
      }

      @media (max-width: 778px) {
        background-image: none;
      }

      @media (max-width: 550px) {
        padding: 0 2rem;
      }

      h1 {
        color: ${theme.colors.white};
        font-size: 2.5rem;

        @media (max-width: 1240px) {
          font-size: 2rem;
        }

        @media (max-width: 550px) {
          font-size: 1.5rem;
        }
      }

      p {
        color: ${theme.colors.white};
        font-size: 1.125rem;
        font-weight: ${theme.fonts.weight.normal};
        margin-bottom: 2rem;

        @media (max-width: 1240px) {
          font-size: 1rem;
        }
      }
    }
  `}
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 508px;
  position: relative;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  input {
    width: 100%;
    padding: 1rem 1.25rem;
    border-radius: 1.25rem;
    outline: 0;
    border: 0;

    @media (max-width: 1240px) {
      width: 80%;
    }

    @media (max-width: 778px) {
      width: 100%;
    }

    &::placeholder {
      font-size: 1.125rem;
    }
  }

  button {
    position: absolute;
    right: 4px;
    top: 4.5px;
    border: 0;

    @media (max-width: 1240px) {
      right: 106px;
    }

    @media (max-width: 778px) {
      right: 4px;
      top: 3.5px;
    }

    @media (max-width: 550px) {
      position: unset;
    }
  }
`;
