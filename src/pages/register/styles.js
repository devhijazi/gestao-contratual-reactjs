import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 3px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 44px;
    font-weight: 900;
    color: #bc96e6;
    margin-bottom: 10px;
  }
  h6 {
    color: #ae759f;
  }
  img {
    width: 30px;
    height: 30px;
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
  color: #fff;
  background: #210b2c;
  transition: 400ms all;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.4);

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

  input {
    margin: 20px 0;
    height: 50px;
    width: 400px;
    font-size: 14px;
    padding-left: 15px;
    transition: 400ms;
    color: #000;

    :valid ~ span.show {
      visibility: visible;
    }

    :valid {
      border: 1px solid #000;
    }

    :focus,
    :valid {
      & ~ label {
        transform: translateY(-50px);
        font-size: 16px;
        color: black;
      }
    }
  }
`;
