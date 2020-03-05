import React from "react";
import { Container, FormContainer, Row, Column, FormButton } from "./styles";
import { Input } from "@rocketseat/unform";

const RegisterPage = ({ history }) => {
  return (
    <Container>
      <FormContainer>
        <h1>CADASTRO DE CONTRATO</h1>
        <Row>
          <label>Nome:</label>
          <Input className="input" type="text" name="nome"/>
        </Row>
        <Row>
          <label>Data do inicio do contrato:</label>
          <Input className="input" type="date" name="dateStart" />
          <label>Data final do contrato:</label>
          <Input className="input" type="date" name="dateEnd" />
        </Row>
        <Row>
          <label>Email para contato:</label>
          <Input className="input" type="email" name="email" />
        </Row>
        <Row>
          <label>Telefone(Opicional):</label>
          <Input className="input" type="tel" name="telefone" />
        </Row>
        <Row>
          <label>Adicionar descrição:</label>
          <Input multiline className="input" name="description" />
        </Row>
        <FormButton type="submit">SALVAR</FormButton>
        <Column />
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;
