import styled from "styled-components";

export const ContainerRelative = styled.div<{ max?: number }>`
  position: relative;
  max-width: ${({ max }) => `${max}px`};
  width: 100%;
  padding: 0 2rem;
`;

export const Container = styled.div<{ height?: number; gap?: number }>`
  max-width: 100%;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  display: flex;
  overflow-x: scroll;
  padding: 0 0.5rem;
  gap: ${({ gap }) => `${gap}px`};
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
