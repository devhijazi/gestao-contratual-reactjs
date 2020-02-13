import React from "react";
import { Route, Redirect } from "react-router-dom";

//importando o auth hurdur
import { isAuthenticate } from "../services/auth.js";

//Components
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const RouteWrapper = ({
  component: Component,
  privateRoute = false,
  ...rest
}) => {
  const autenticado = isAuthenticate();
  if (privateRoute && !autenticado) return <Redirect to="/" />; //se não for autenticado retorna pra home

  if (!privateRoute && autenticado) return <Redirect to="/dashboard" />; // se ja for autenticado loga no dashboard

  return (
    <Route
      {...rest}
      render={props => (
        <div>
          <Navbar />
          <Component {...props} />
          <Footer />
        </div>
      )}
    />
  );
};
export default RouteWrapper;
