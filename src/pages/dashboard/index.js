import React from "react";
import { Container } from "./styles";


const dashBoardPage = ({ history }) => {
  var x = localStorage.getItem("user");
  return (
    <Container>
      <h1>{x}</h1>

    </Container>
  );
};
export default dashBoardPage;
