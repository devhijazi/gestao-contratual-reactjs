import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { isAuthenticated, getUser } from "../../services/auth.js";

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

const UserContainer = ({ user, dropdownOpen, handleClick }) => {
  if (user) {
    return (
      <button type="button" onClick={handleClick}>
        <span>{user.name}</span>
      </button>
    );
  }

  return <></>;
};

const HeaderComponent = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    async function getLoggedUser() {
      if (isAuthenticated()) {
        const localUser = getUser();
        console.log(localUser);
        setUser(localUser);
      }

      setLoading(false);
    }

    getLoggedUser();
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


  const warnNotify = () => {
    toast.error(`Olá o sistema de cadastro está Offline.`, {});
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
                  <a>{user ? user.name : "Logando.."}</a>
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
