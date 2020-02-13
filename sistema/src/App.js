import React from "react";

//Default style
import GlobalStyle from "./styles/global";

//importando routes
import Routes from "./router";



const App = () => (
  <div>

    <Routes />
   
    <GlobalStyle />
  </div>
);

export default App;
