import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { signOut } from '../../store/reducers/AuthReducer/actions.js';

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
  FixedItems,
  Dropdown,
  DropdownItems
} from "./styles";

const HeaderComponent = props => {

  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggle = () => setNavbarOpen(!navbarOpen);

  const handleClick = () => setDropdownOpen(!dropdownOpen);
  const handleClickItem = () => {
    navbarToggle();
    handleClick();
  };

  const handleLogout = () => (signOut());

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
            <Dropdown>
              <NavbarItem>
                <button type="button" onClick={handleClick}>
                  <span>{user ? user.name : "Acessando..."}</span>
                </button>
                <DropdownItems open={dropdownOpen} onClick={handleClickItem}>
                  <Link to="/dashboard">Inicio</Link>
                  <button type="button" onClick={handleLogout}>
                    Sair.
                  </button>
                </DropdownItems>
              </NavbarItem>
            </Dropdown>
          </nav>
        </Navigation>
      </Header>
    </Container>
  );
};
export default HeaderComponent;
