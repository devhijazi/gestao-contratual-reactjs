import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  padding: 0 auto;
`;

export const RowHeader = styled.header`
  background-color: #eb4034;
  color: white;
  h6 {
    font-weight: bold;
  }
`;

export const RowItems = styled.div`
  background-color: #e9e8ff;
  color: blue;
  font-weight: bold;

  p {
    :nth-child(even) {
      background-color: #382928;
      color: black;
    }
  }
`;

export const Row = styled.div`
  flex-grow: 1;
`;
