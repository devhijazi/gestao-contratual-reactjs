import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 10px;
  display: block;

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
`;

export const CounterContainer = styled.div`
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 30px;
  margin: 15px auto;

  h1{
    text-align: left;
    margin-top: 0 auto;
    color: #fa9200;
  }
  span{
    color: #6633f2;
    justify-content: space-between;
  }

`;
