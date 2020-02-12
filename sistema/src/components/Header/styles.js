  
import styled, { css } from 'styled-components';

export const Container = styled.div`
  user-select: none;
  header,
  nav,
  ul {
    display: flex;
    align-items: center;
  }
  @media (max-width: 900px) {
    width: 100%;
    ul {
      display: block;
    }
  }
`;

export const RowMobileContent = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
    height: 80px;
  }
`;

export const Header = styled.header`
  z-index: 1;
  align-items: center;
  padding: 0 100px;
  height: 80px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    position: fixed;
    width: 100%;
    top: 0;
    display: block !important;
    padding: 0 !important;
    box-shadow: none;
  }
`;

export const FixedItems = styled.div`
  @media (max-width: 900px) {
    padding: 10px 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoStyle = styled.img`
  width: 60px;
  height: 60px;
`;

export const Navigation = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid rgba(250, 250, 250, 0.3);
  li {
    margin-right: 15px;
  }
  li:last-child {
    margin-right: 0;
  }
  li a {
    opacity: ${props => !props.activePage && '1'} !important;
  }
  @media (max-width: 900px) {
    position: fixed;
    display: block;
    z-index: 1;
    width: 100%;
    height: 100vh;
    transform: translateX(-100%);
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
    ul {
      width: 100%;
    }
    li {
      display: flex;
      justify-content: center;
      margin: 0 !important;
    }
    nav {
      flex-direction: column;
    }
    ${props =>
      props.open &&
      css`
        transition: transform 500ms;
        transform: translateX(0) !important;
      `}
  }
`;

export const NavItem = styled.li`
  a {
    color: ${props => props.theme.header.color};
    font-weight: 600;
    text-transform: uppercase;
    opacity: ${props => !props.active && 0.8};
    transition: opacity 300ms;
  }
  @media (min-width: 901px) {
    a {
      position: relative;
      top: 1px;
    }
    a:after {
      content: '.';
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
    ${props =>
      props.active &&
      css`
        a:after {
          width: 100%;
        }
      `}
  }
  @media (max-width: 900px) {
    a {
      text-align: center;
      padding: 20px 0;
      width: 100%;
      border: none !important;
    }
  }
`;


export const ResponsiveContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const ResponsiveButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  span {
    display: block;
    width: 40px;
    margin: 10px 0;
    background-color: #fff;
    height: 1px;
    transform-origin: center;
    transition-duration: 200ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
  }
  ${props =>
    props.open &&
    css`
      span {
        margin: 0;
      }
      span:nth-child(1) {
        transform: rotate(45deg);
      }
      span:nth-child(2) {
        display: none;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
      }
    `}
`;

export const BrightnessStyle = styled.div`
  & > * {
    color: #fff !important;
  }
  button {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.6));
  }
  @media (min-width: 901px) {
    margin-left: 20px;
  }
  @media (max-width: 900px) {
    * {
      border-radius: 0;
    }
    &,
    button {
      width: 100%;
    }
    button {
      padding: 10px 0;
    }
  }
`;