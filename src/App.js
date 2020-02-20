import React from "react";
//Default style
import GlobalStyle from "./styles/global.js";
//importando routes
import Routes from "./router";
const App = () => (
  <div>
    <div id="bgImageTop">
      <div id="bgImage">
        <Routes />
        <GlobalStyle />
      </div>
    </div>
  </div>
);

export default App;
