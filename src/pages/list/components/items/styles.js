import styled from "styled-components";

export const IconsContainer = styled.div`
  svg {
    font-size: 16px;
    margin: 0 4px;
  }
`;

export const Row = styled.div`
  flex-grow: 1;
`;

export const RowHeader = styled.header`
  background-color: #8c08ff;
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
      background-color: #f2f2f2;
      color: black;
    }
  }
`;
