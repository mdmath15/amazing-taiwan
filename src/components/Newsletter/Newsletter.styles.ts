import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 2rem 14rem;
    background: url("/images/wave-footer.svg") no-repeat bottom;
    background-size: contain;

    section {
      max-width: 1248px;
      margin: 0 auto;
      margin-bottom: 10rem;
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

      h1 {
        color: ${theme.colors.white};
        font-size: 2.5rem;
      }

      p {
        color: ${theme.colors.white};
        font-size: 1.125rem;
        font-weight: ${theme.fonts.weight.normal};
        margin-bottom: 2rem;
      }
    }
  `}
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 508px;
  position: relative;

  input {
    width: 100%;
    padding: 1rem 1.25rem;
    border-radius: 1.25rem;
    outline: 0;
    border: 0;

    &::placeholder {
      font-size: 1.125rem;
    }
  }

  button {
    position: absolute;
    right: 4px;
    top: 4.5px;
    border: 0;
  }
`;
