import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  justify-content: center;
  margin-bottom: 12%;

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: black;
  }
`;
export const Hero = styled.section`
  background-color: #bc96e6;
  margin-top: 20px;
  margin-bottom: 60px;
  * {
    text-align: left !important;
  }
`;

export const CounterContainer = styled.div`
  justify-content: center;
  padding: 10px 30px;
  margin: 20px 10px;
  border-radius: 5px;
  h2 {
    text-align: center;
    font-style: oblique;
    font-weight: bold;
    font-size: 30px;
    color: #6a5acd;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    color: #483d8b;
  }
`;
