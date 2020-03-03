import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: whitesmoke;

  & * {
    text-align: center;
  }
  div {
    margin: 20px 0;
  }
  h1 {
    font-size: 160px;
    font-weight: 900;
    color: black;
    font-style: italic !important;
  }
  h2 {
    cursor: pointer;
    position: relative;
    font-size: 30px;
    font-weight: 900;
    padding: 25px 0;
    border-radius: 5px;
    color: black;
    border: 0.5px solid;
  }
  h2 span {
    position: absolute;
    width: 100%;
    top: calc(25px / 3);
    left: 0%;
    transition: color 200ms, opacity 200ms, left 400ms;
  }
  h2 span:first-child {
    opacity: ${props => (props.show ? 0 : 1)};
  }
  h2 span:last-child {
    left: ${props => (props.show ? "0%" : "20%")};
    opacity: ${props => (props.show ? 1 : 0)};
    color: black;
  }
`;
