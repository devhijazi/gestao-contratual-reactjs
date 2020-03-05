import React from "react";
import { Container, FormContainer, Row, Column, FormButton } from "./styles";
import { Form } from "@rocketseat/unform";

const RegisterPage = ({ history }) => {


  return (
    <Container>
      <FormContainer>
        <h1>CADASTRO DE CONTRATO</h1>
        <Row>
          <label>Nome:</label>
          <input className="input" type="text" name="name"/>
        </Row>
        <Row>
          <label>Data do inicio do contrato:</label>
          <input className="input" type="date" name="createdAt" />
          <label>Data final do contrato:</label>
          <input className="input" type="date" name="finalAt" />
        </Row>
        <Row>
          <label>Email para contato:</label>
          <input className="input" type="email" name="email" />
        </Row>
        <Row>
          <label>Telefone(Opicional):</label>
          <input className="input" type="tel" name="contact" />
        </Row>
        <Row>
          <label>Adicionar descrição:</label>
          <input multiline className="input" name="description" />
        </Row>
        <FormButton type="submit">SALVAR</FormButton>
        <Column />
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;
