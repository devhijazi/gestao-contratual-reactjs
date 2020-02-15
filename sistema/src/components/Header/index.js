import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/brasao.png";

import {
  Container,
  Header,
  LogoStyle,
  Navigation,
  NavbarItem,
  ResponsiveContainer,
  FixedItems
} from "./styles";

const HeaderComponent = props => {
  return (
    <Container>
      <Header>
        <FixedItems>
          <Link to="/">
            <LogoStyle src={Logo} />
          </Link>
          <ResponsiveContainer>
            <span /> <span /> <span />
          </ResponsiveContainer>
        </FixedItems>
        <Navigation>
          <nav>
            <ul>
              <NavbarItem path="/cadastro">
                <Link to="/cadastro">Cadastro</Link>
              </NavbarItem>
              <NavbarItem path="/">
                <Link to="/list">Lista</Link>
              </NavbarItem>
              <NavbarItem path="/">
                <Link to="/notifications">Notificações</Link>
              </NavbarItem>
            </ul>
          </nav>
          <nav>
            <NavbarItem>
              <Link to="/#">Conta</Link>
            </NavbarItem>
          </nav>
        </Navigation>
      </Header>
    </Container>
  );
};
export default HeaderComponent;
