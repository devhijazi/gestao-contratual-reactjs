import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  background-color: #210b2c;

  div {
    align-items: center;
    justify-content: center;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: darkblue;
`;
export const DeveloperContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 300;
  color: #000;
`;

export const DeveloperContent = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: white;

  a {
    position: relative;
    opacity: 1;
    color: white;
    transition: color 300ms ease;
    font-weight: bold;
    text-transform: uppercase;
    margin: 5px !important;

    :after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      left: 0;
      bottom: 0;
      opacity: 0;
      background: rgb(255, 255, 255);
      border-radius: 10px;
      transition: all 0.5s ease 0s;
    }
  }

  a:hover {
    opacity: 1;
    color: #3b72ff;

    :after {
      opacity: 1;
    }
  }
`;
