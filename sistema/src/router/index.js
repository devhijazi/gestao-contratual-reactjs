import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//Importando o Route
import Route from "./Route";

import { Home, DashBoard } from "../pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={DashBoard} privateRoute={true} />
    </Switch>
  </Router>
);
export default Routes;
