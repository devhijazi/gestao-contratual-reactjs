import React from "react";
//Default style
import GlobalStyle from "./styles/global.js";
//importando routes
import Routes from "./router";
//Import toast popup
import {ToastContainer} from 'react-toastify';



const App = () => (
  <div>
    <div id="bgImageTop">
      <div id="bgImage">
        <Routes />
        <GlobalStyle />
        <ToastContainer position = "top-right" autoClose ={1500}/>
      </div>
    </div>
  </div>
);

export default App;
