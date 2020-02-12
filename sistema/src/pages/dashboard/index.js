import React from "react";
import { Container, FormContainer } from "./styles";

import Navbar from '../../components/Header';

const dashBoardPage = ({ history }) => {
  return (
    <Navbar>
    <Container>
      <FormContainer>
        <h3>SISTEMA</h3>
      </FormContainer>
    </Container>
    </Navbar>
  );
};
export default dashBoardPage;
