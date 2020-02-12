import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/Logo.png";

import {
  Container,
  RowMobileContent,
  Header,
  FixedItems,
  LogoStyle,
  Navigation,
  ResponsiveContainer,
  ResponsiveButton,
  NavItem,
  NavbarText
} from "./styles";

const HeaderComponent = props => {

  const [headerOpen, setHeaderOpen] = useState(false);
  const [activePage, setActivePage] = useState(false);
  const headerToggle = () => setHeaderOpen(!headerOpen);

  const HeaderItemWrapper = ({ path, children, ...config }) => {
   const active = path === props.location.pathname;
    if (active) setActivePage(true);
   return (
     <NavItem active={active} {...config}>
        {children}
      </NavItem>
    );
  };
  return (
    <Container>
      <RowMobileContent>
        <Header>
          <FixedItems>
            <Link to="/">
              <LogoStyle src={Logo} />
            </Link>
            <ResponsiveContainer>
              <ResponsiveButton open={headerOpen} onClick={headerToggle}>
                <span /> <span /> <span />
              </ResponsiveButton>
            </ResponsiveContainer>
          </FixedItems>
          <Navigation open={headerOpen} activePage={activePage}>
            <nav>
              <ul onClick={headerToggle}>
                <HeaderItemWrapper path="/">
                  <Link to="/">Cadastro</Link>
                </HeaderItemWrapper>
                <HeaderItemWrapper path="/lista">
                  <Link to="/lista">Cadastrados</Link>
                </HeaderItemWrapper>
                <HeaderItemWrapper path="/remember">
                  <Link to="/remember">A Vencer</Link>
                </HeaderItemWrapper>
              </ul>
            </nav>
            <nav>
              <ul onClick={headerToggle}>
                <NavItem>
                  <Link to="/dashboard">Logado</Link>
                </NavItem>
              </ul>
            </nav>
          </Navigation>
        </Header>
      </RowMobileContent>
    </Container>
  );
};
export default HeaderComponent;