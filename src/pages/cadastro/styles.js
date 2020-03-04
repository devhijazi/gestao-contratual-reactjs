import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 70px;
  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    text-align: center;
    margin-top: 50px;
    font-size: 15px;
    color: black;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  padding: 10px 20px;

  input {
    text-align: center;
    border: 0.5px solid black;
    margin: 0 5px;
  }
  input::placeholder {
    font-style: italic;
    color: blue;
  }
`;

export const Column = styled.div`

`;


export const FormButton = styled.button`
  cursor: pointer;
  border: none;
  width: 50%;
  margin-top: 10px;
  margin-inline-start: 240px;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 30px;
  border-radius: 10px;
  color: #fff;
  box-shadow: 1px 1px 2px black;
  background: green;
  transition: 800ms all;

`;