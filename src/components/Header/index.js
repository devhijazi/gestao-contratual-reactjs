import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { isAuthenticated, getUser, logout } from "../../services/auth.js";

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


const HeaderComponent = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    async function getLoggedUser() {
      if (isAuthenticated()) {
        const localUser = getUser();
        setUser(localUser);
      }

      setLoading(false);
    }

    getLoggedUser();
  }, []);

  const handleClick = () => setDropdownOpen(!dropdownOpen);

  const UserContainer = ({ user, dropdownOpen, handleClick }) => {
    if (user) {
      return (
        <Dropdown>
          <button type="button" onClick={handleClick}>
            <span>
              <i className=" fas fa-user"> </i> {user.name}
            </span>
          </button>
          <DropdownItems open={dropdownOpen}>
            <button type="button" onClick={logout}>LOGOUT</button>
          </DropdownItems>
        </Dropdown>
      );
    }
    return <></>;
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
                <Link to="/cadastro">CADASTRAR</Link>
              </NavbarItem>
              <NavbarItem path="/lista">
                <Link to="/lista">CONTRATOS</Link>
              </NavbarItem>
              <NavbarItem path="/">
                <Link to="/notifications">VENCIMENTOS</Link>
              </NavbarItem>
            </ul>
          </nav>
          <nav>
            {loading ? (
              "Loading..."
            ) : (
              <UserContainer
                user={user}
                handleClick={handleClick}
                dropdownOpen={dropdownOpen}
              />
            )}
          </nav>
        </Navigation>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
