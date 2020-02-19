import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  justify-content: center;
  align-items: center;

`;

export const FormContainer = styled.div`
@import url('https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.6);
  padding: 60px 40px;
  border-radius: 10px;
  margin-top:50px;

  h3 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #D31027;
    font-family: 'Saira Semi Condensed', sans-serif;
    /*color: ${props => props.theme.favColor};*/
    
  }
  h6{
    font-family: 'Saira Semi Condensed', sans-serif;
    
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  padding: 10px 60px;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(to right, #1D4350, #A43931);
  /*background: linear-gradient(to right, #f7ff00, #db36a4);*/
  transition: 400ms all;
  box-shadow: 1px 2px 4px black;
  :hover {
    transform: translateY(-2px);
  }
`;

export const FormInput = styled.div`
  position: relative;

  label,
  span.show {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  label {
    left: 15px;
    pointer-events: none;
    color: grey;
    font-size: 14px;
    transition: all 0.4s;
  }

  span.show {
    cursor: pointer;
    user-select: none;
    right: 20px;
    color: #111;
    font-size: 14px;
    font-weight: bold;
    visibility: hidden;
  }
`;

export const Input = styled.input`
  margin: 25px 0;
  height: 50px;
  width: 400px;
  border: 1px solid silver;
  outline: none;
  font-size: 14px;
  padding-left: 15px;
  border-radius: 5px;
  transition: 400ms;
  color: #000;

  :focus {
    border: 1px solid #a10d14;
  }

  :valid ~ span.show {
    visibility: visible;
  }

  :focus ~ label,
  :valid ~ label {
    transform: translateY(-45px);
    font-size: 16px;
    color: #ff9305;
  }
`;