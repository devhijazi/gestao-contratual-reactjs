import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  padding: 0 auto;
  margin-bottom: auto;
`;

export const RowHeader = styled.header`
  background-color: #bc96e6;
  color: white;
  h6 {
    font-weight: bold;
  }
`;

export const RowItems = styled.div`
  background-color: #e9e8ff;
  color:red;
  font-weight: bold;
 
  p {
    :nth-child(even) {
      background-color: #f2f2f2;
      color: black;
    }
  }
`;

export const Row = styled.div`
  flex-grow: 1;
`;
export const IconsContainer = styled.div`
  svg {
    font-size: 16px;
    margin: 0 4px;
  }
`;
export const FullContainer = styled.div`
  height: calc(100vh - 80px);
  @media (max-width: 900px) {
    height: calc(100vh - 40px);
  }
`;