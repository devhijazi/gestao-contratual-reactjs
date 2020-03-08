import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  justify-content: center;
  margin-bottom: 11%;
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
  justify-content: center;
  padding: 60px 50px;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.3);
  margin: 10px 10px;
  border-radius: 5px;
  h2 {
    text-align: center;
    font-style: oblique;
    font-weight: bold;
    font-size: 30px;
    color: #6A5ACD;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    color: #483D8B;
  }
`;
