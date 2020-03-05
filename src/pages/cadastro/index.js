import React from "react";
import { Container, FormContainer, Row, Column, FormButton } from "./styles";
import { Form, Input } from "@rocketseat/unform";

import api from "../../services/api";
import { token } from "../../services/auth";
import { toast } from "react-toastify";

const RegisterPage = ({ history }) => {
  async function handleSubmit(data) {
    try {
     await api.post("/contract", data, {
        headers: { Authorization: token() }
      });
      toast.sucess('Contrato Salvo com sucesso')
      window.location.reload();
    } catch (e) {
      const error = e.response.data.error || "Ocorreu um erro";

      toast.error(error || "Verifique todos os campos");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>CADASTRO DE CONTRATO</h1>
          <Row>
            <label>Nome:</label>
            <Input className="input" type="text" name="name" />
          </Row>
          <Row>
            <label>Data do inicio do contrato:</label>
            <Input className="input" type="date" name="createdAt" />
            <label>Data final do contrato:</label>
            <Input className="input" type="date" name="finalAt" />
          </Row>
          <Row>
            <label>Email para contato:</label>
            <Input className="input" type="email" name="email" />
          </Row>
          <Row>
            <label>Telefone(Opicional):</label>
            <Input className="input" type="tel" name="contact" />
          </Row>
          <Row>
            <label>Adicionar descrição:</label>
            <Input multiline className="input" name="description" />
          </Row>
          <FormButton type="submit">SALVAR</FormButton>
          <Column />
        </FormContainer>
      </Form>
    </Container>
  );
};

export default RegisterPage;
