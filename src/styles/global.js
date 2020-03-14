import { createGlobalStyle } from "styled-components";

// import bg from "../assets/others/wave.svg";
// import bgFooter from "../assets/others/wave_footer.svg";

//importing toastfy css
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif !important;
  }

  html {
    scroll-behavior: smooth;
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
  h6{
    font-family: 'Roboto Condensed', sans-serif !important;
  }
 

  a, 
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .main-container {
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
`;
