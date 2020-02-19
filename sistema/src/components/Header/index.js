import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { isAuthenticate } from "../../services/auth.js";
import api from "../../services/api.js";
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { user } = await api
        .get("/user/admin", {
          headers: { Authorization: localStorage.getItem("token") }
        })
        .then(r => r.data);

      setUser(user);
    }
    if (isAuthenticate()) getUser();
  }, []);

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
              <NavbarItem path="/lista">
                <Link to="/lista">Lista</Link>
              </NavbarItem>
              <NavbarItem path="/">
                <Link to="/notifications">Notificações</Link>
              </NavbarItem>
            </ul>
          </nav>
          <nav>
              <NavbarItem>
                <ul>{user ? user.name : "Acessando..."}</ul>
              </NavbarItem>
          </nav>
        </Navigation>
      </Header>
    </Container>
  );
};
export default HeaderComponent;
