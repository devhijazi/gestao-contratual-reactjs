import React from "react";
import moment from "moment";
import { ToastContainer } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

import Routes from "./router";

import GlobalStyle from "./styles/global.js";

moment.locale("pt", {
  calendar: {
    sameElse: "DD/MM/YYYY"
  }
});

library.add(faTrash);
library.add(faPen);

const App = () => (
  <section className="main-container">
    <Routes />
    <GlobalStyle />
    <ToastContainer position="top-right" autoClose={1500} />
  </section>
);

export default App;
