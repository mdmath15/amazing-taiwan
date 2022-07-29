import styled from "styled-components";

export const ContainerRelative = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 100%;
  min-height: 500px;
  margin: 0 auto;
`;

export const Container = styled.div<{ width: number }>`
  max-width: ${({ width }) => width}px;
  width: 100%;
  min-height: 600px;
  display: flex;
  overflow-x: scroll;
  padding: 0;
  gap: 1rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .buttons {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;

    @media (max-width: 768px) {
      justify-content: space-around;
    }

    button {
      background: none;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
    }
    .prev {
      transform: translateX(10px);
    }
    .next {
      transform: translateX(-10px);
    }
  }
`;

export const BallsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Balls = styled.button<{ active?: boolean }>`
  svg {
    color: ${({ active }) => (active ? "#fff" : "grey")};
  }
`;
