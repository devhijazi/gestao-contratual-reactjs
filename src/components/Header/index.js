import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { isAuthenticate } from "../../services/auth.js";
import api from "../../services/api.js";
import Logo from "../../assets/img/brasao.png";
import { toast } from "react-toastify";

/*import history from "../../services/history";*/

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

const HeaderComponent = ({ props }) => {
  const [user, setUser] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const handleClick = () => setDropdownOpen(!dropdownOpen);
  const handleClickItem = () => {
    handleClick();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload("/");
  };

  var x = localStorage.getItem("user");

  const warnNotify = () => {
    toast.error(`Olá, ${x} o sistema de cadastro está Offline.`, {});
  };

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
                <Link onClick={warnNotify} to="/cadastro">
                  Cadastro
                </Link>
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
                  <a>{user ? user.name : "Acessando..."}</a>
                </button>
                <DropdownItems open={dropdownOpen} onClick={handleClickItem}>
                  <button type="button">Configuração</button>
                  <button type="button" onClick={handleLogout}>
                    Encerrar.
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
