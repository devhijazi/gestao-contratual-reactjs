import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//Importando o Route
import Route from "./Route";

import { Home, DashBoard, Cadastro, Lista } from "../pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} navbar={false} footer={false} />
      <Route path="/dashboard" component={DashBoard} privateRoute={true} />
      <Route path="/cadastro" component={Cadastro} privateRoute={true} />
      <Route path="/lista" component={Lista} privateRoute={true} />
    </Switch>
  </Router>
);
export default Routes;
