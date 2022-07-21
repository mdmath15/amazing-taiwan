import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 458px;
  width: 278px;
  span {
    border-radius: 1.5rem;
  }
`;

export const Content = styled.div`
  margin-top: -60px;
  z-index: 999;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
`;
