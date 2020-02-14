import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  box-sizing: border-box;
  
`;
export const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    h3{
      text-align:center;
      font-size:50px;
      color: #7AA1D2
    }
    h4{
      text-align:center;
      margin-top: 30px;
      font-family: 'Times New Roman', Times, serif;
      font-size: 15px;
      color:#EA384D;
    }
  
`;
export const FormInput = styled.div`
  position:relative;
  margin-top:20px;

  label,
  span.show{
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    font-family:'Courier New', Courier, monospace
  
  }
  label{ 
    left: 15px;
    pointer-events: none;
    color: black;
    font-size: 15px;
    transition: all 0.5s;
   
    
  }
  span.show{
    cursor: pointer;
    user-select: none;
    right: 20px;
    color: #111;
    font-size: 10px;
    font-weight: bold;
    visibility: hidden;
  }
`;

export const Input = styled.div`
  margin: 20px 0;
  height: 50px;
  width: 650px;
  border: 1px solid blueviolet;
  font-size: 20px;
  padding: 20px;
  border-radius: 10px;
  transition: 400ms;
  color: #000;
  :focus{
    border: 1px solid #f5d20a;
  }
  :valid ~ span.show{
    visibility: visible;
  }
  :focus ~ label,
  :valid ~ label{
    transform: translateY(-45px);
    font-size: 15px;
    color:#f5d20a;
  }
`;
export const FormButton = styled.button`
  cursor: pointer;
  border: none;
  width: 50%;
  margin-top: 10px;
  margin-inline-start:324px;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 60px;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(to right, #add100, #7b920a);
  transition: 400ms all;
  
  
  :hover {
    transform: translateY(10px);
  }
`;

