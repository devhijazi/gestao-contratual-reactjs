import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;
  padding: 0 auto;
  margin-bottom: auto;

  .items,
  .navigation {
    display: flex;
  }

  .navigation {
    margin-top: 30px;
    padding: 10px 5px;
    align-items: center;
    justify-content: center;
  }
`;

export const FullContainer = styled.div`
  height: calc(100vh - 80px);

  @media (max-width: 900px) {
    height: calc(100vh - 40px);
  }
`;
