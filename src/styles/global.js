import { createGlobalStyle } from "styled-components";
import bg from "../assets/others/wave.svg";
import bgFooter from "../assets/others/wave_footer.svg";

//importing toastfy css
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'PT Sans Narrow', sans-serif !important;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'PT Sans Narrow', sans-serif;
   
  }

  ul {
    list-style-type: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  #bgImageTop {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 100%;
  }

  #bgImage {
    background-image: url(${bgFooter});
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .main-container {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
  }
`;
