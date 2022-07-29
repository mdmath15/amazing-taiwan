import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  margin-bottom: -4px;
  margin-top: -4px;

  @media (max-width: 600px) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;
