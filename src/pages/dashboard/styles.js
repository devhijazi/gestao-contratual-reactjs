import styled from "styled-components";

export const Container = styled.div`
  display: block;
  justify-content: center;
  margin-bottom: auto;
  margin-top: 5px;


  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: black;
  }
`;

export const Hero = styled.section`
  background-color: #bc96e6;
  margin-top: 40px;
  margin-bottom: 60px;

  * {
    text-align: left !important;
  }
  span{
    color: #6633f2;
    justify-content: space-between;
  }
`;
export const FullContainer = styled.div`
  height: calc(100vh - 80px);
  @media (max-width: 900px) {
    height: calc(100vh - 40px);
  }
`;