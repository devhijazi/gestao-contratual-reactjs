import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//Importando o Route
import Route from "./Route";

import { Home, DashBoard, Cadastro } from "../pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} navbar={false} footer={false} />
      <Route path="/dashboard" component={DashBoard} privateRoute={true} />
      <Route path="/cadastro" component={Cadastro}/>
     
    </Switch>
  </Router>
);
export default Routes;
