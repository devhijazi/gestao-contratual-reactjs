import styled from "styled-components";

export const Container = styled.div`
  user-select: none;

  header,
  nav,
  ul {
    display: flex;
    align-items: center;
  }
  @media (max-width: 500px) {
    width: 100%;

    ul {
      display: block;
    }
  }
`;

export const Header = styled.header`
  z-index: 1;
  align-items: center;
  padding: 0 100px;
  height: 60px; /*Largua da navbar*/
  /*Cor da background da navbar*/
  /*background: linear-gradient(#373B44,#4286f4);*/
  /* box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);*/
  @media (max-width: 500px) {
    position: fixed;
    width: 100%;
    top: 0;
    display: block !important;
    padding: 0 !important;
    box-shadow: none;
  }
`;

export const FixedItems = styled.div`
  @media (max-width: 500px) {
    padding: 10px 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;
export const LogoStyle = styled.img`
  width: 40px;
  height: 40px;
`;

export const Navigation = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid rgba(250, 250, 250, 0.5);

  li {
    margin-right: 10px;
  }
  li:last-child {
    margin-right: 0px;
  }
  li a {
    opacity: 1;
  }
  @media (max-width: 500px) {
    position: fixed;
    display: block;
    z-index: 1;
    width: 100%;
    height: 100vh;
    transform: translateX(-100%);
    background-color: black;
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  ul {
    width: 100%;
  }
  li {
    display: flex;
    justify-content: center;
    margin: 10px !important;
  }
  nav {
    flex-direction: inline;
  }
`;
export const NavbarItem = styled.li`
  a {
    color: whitesmoke;
    font-weight: 500;
    text-transform: uppercase;
    transition: opacity 300ms;
  }
  @media (min-width: 900px) {
    a {
      position: relative;
      top: 1px;
    }
    a:after {
      content: ".";
      position: absolute;
      margin: auto;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      color: transparent;
      background: #fff;
      height: 2px;
      transition: width 300ms;
    }
    a:hover {
      opacity: 1;
    }
    a:hover:after {
      width: 100%;
    }
    @media (max-width: 900px) {
      a {
        text-align: center;
        padding: 10px 0;
        width: 100%;
        border: none !important;
      }
    }
  }
  ul {
  }
`;
export const Dropdown = styled.li`
  position: relative;
  z-index: 5;
  width: 100%;

  button:first-child {
    cursor: pointer;
    background: none;
    border: none;
    color: white;
    font-weight: 600;
  }
  button:first-child img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  button:first-child span {
    margin-left: 5px;
  }
  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    button {
      padding: 20px 0;
    }
  }
`;
export const DropdownItems = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  flex-direction: column;
  margin-top: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${props => (props.open ? "flex" : "none")};

  button {
    border: none;
    background: none;
  }
  a,
  button {
    cursor: pointer;
    text-align: center;
    padding: 10px 0;
    color: white;
  }
  a:hover,
  button:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 900px) {
    position: relative;
    background: none;
    box-shadow: none;
    margin-top: 0;
    a,
    button {
      padding: 10px 0;
      color: black;
      text-align: center;
    }
  }
`;
export const ResponsiveContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    display: flex;
  }
`;
