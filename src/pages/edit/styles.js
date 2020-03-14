import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 40px;
  margin-top: 10px;
  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: black;
  }
`;
export const Hero = styled.section`
  background-color: #3aab4f;
  margin-top: -10px;
  * {
    text-align: center !important;
  }
  span {
    color: #6633f2;
    justify-content: space-between;
  }
  h2 {
    color: white;
  }
`;

export const FormContainer = styled.div`
  width: 700px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: stretch;
  justify-content: space-between;
  margin-top: 10px;

  h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 60px;
    color: #000;
  }
  input,
  textarea {
    margin-bottom: 30px;
  }
`;

export const Row = styled.div`
  flex-direction: column;
  justify-content: stretch;
  justify-content: space-between;
  color: black;
  padding: 2px 10px;
  font-weight: bold;
  h1 {
    margin: auto;
    margin-top: 3px;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  border: none;
  width: 140px;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 200;
  padding: 10px 10px;
  border-radius: 5px;
  color: black;
  box-shadow: 1px 1px 2px black;
  background: greenyellow;
`;
export const FullContainer = styled.div`
  height: calc(100vh - 80px);
  @media (max-width: 900px) {
    height: calc(100vh - 40px);
  }
`;
