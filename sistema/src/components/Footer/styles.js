import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);

  div {
    align-items: center;
    justify-content: center;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  background-color: darkblue;
`;
export const DeveloperContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 300;
  color: #000;
  background: linear-gradient(#799F0C,#acbb78);

  
`;

export const DeveloperContent = styled.div`
    font-size: 12px;
    font-weight: 300;
    color: whitesmoke;

    a{
        position: relative;
        opacity: 1;
        color: white;
        transition: color 300ms ease;
        text-transform: uppercase;
        margin: 5px !important
     
    }
    a:after{
        content: '';
        position:absolute;
        height: 1px;
        width: 100%;
        left: 0;
        bottom: 0;
        opacity: 0;
        background: rgb(255,255,255);
        border-radius: 10px;
        transition: all 0.5s ease 0s;
    
    }
    a:hover{
        opacity: 1;
        color:#3b72ff;
    }
    a:hover:after{
        opacity: 1;
    }
`;
