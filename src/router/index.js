import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//Importando o Route
import Route from "./Route";

import {
  Home, //Main Login
  DashBoard, //Main Dashboard + infos do sistema
  Cadastro, // registra contratos no banco de dados
  Lista, // listagem de contratos ( delete e edit )
  NotFound, // pagina de erro
  Register, //registra um novo usuário
  Overdue, // contratos próximos a dada de vencimento
  Edit // edita os contratos
} from "../pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} navbar={false} footer={false} />
      <Route
        path="/register"
        component={Register}
        navbar={false}
        footer={false}
      />
      <Route path="/dashboard" component={DashBoard} privateRoute={true} />
      <Route path="/cadastro" component={Cadastro} privateRoute={true} />
      <Route
        path="/lista"
        component={Lista}
        privateRoute={true}
        navbar={true}
        footer={false}
      />
      <Route
        path="/overdue"
        component={Overdue}
        privateRoute={true}
        navbar={true}
        footer={false}
      />
      <Route
        path="/edit/:id"
        component={Edit}
        privateRoute={true}
        navbar={false}
        footer={false}
      />

      <Route
        path="/notfound"
        component={NotFound}
        navbar={false}
        footer={true}
      />
    </Switch>
  </Router>
);

export default Routes;
