import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./router";

import GlobalStyle from "./styles/global.js";

const App = () => (
  <section className="main-container">
    <Routes />
    <GlobalStyle />
    <ToastContainer position="top-right" autoClose={1500} />
  </section>
);

export default App;
