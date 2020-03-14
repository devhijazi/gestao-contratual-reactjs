import React from "react";
import { Route, Redirect } from "react-router-dom";

//importando o auth hurdur
import api from "../services/api";
import { isAuthenticated, token } from "../services/auth";

//Components
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const RouteWrapper = ({
  component: Component,
  privateRoute = false,
  navbar = true,
  footer = true,
  ...rest
}) => {
  api.defaults.headers.Authorization = token();

  const authenticated = isAuthenticated();
  if (privateRoute && !authenticated) return <Redirect to="/" />; //se não for autenticado retorna pra home

  if (!privateRoute && authenticated) return <Redirect to="/dashboard" />; // se ja for autenticado loga no dashboard

  return (
    <Route
      {...rest}
      render={props => (
        <>
          {navbar ? <Navbar /> : null}
          <Component {...props} />
          {footer ? <Footer /> : null}
        </>
      )}
    />
  );
};

export default RouteWrapper;
