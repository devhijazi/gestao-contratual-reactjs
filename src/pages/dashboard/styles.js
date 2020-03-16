import styled from "styled-components";

export const Container = styled.div`
  display: block;
  justify-content: center;
  margin-bottom: auto;
  margin-top: 5px;

  h1{
    text-align:center;
    font-size: 50px;
    color:black;
  }

`;

export const Hero = styled.section`
  background-color: #bc96e6;
  margin-top: 20px;


  * {
    text-align: left !important;
  }
  span {
    color: #6633f2;
    justify-content: space-between;
  }
  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: black;
  }
`;
export const FullContainer = styled.div`
  height: calc(100vh - 80px);
  @media (max-width: 900px) {
    height: calc(100vh - 40px);
  }
`;

export const RowGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
`;

export const RowItems = styled.div`
  margin: 30px;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
  }

  h2 {
    font-weight: bold;
    font-size: 50px;
    color: black;

  }
`;
