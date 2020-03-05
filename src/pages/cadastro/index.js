import React from "react";
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";

import api from "../../services/api";
import { token } from "../../services/auth";

import {
  Container,
  Hero,
  FormContainer,
  Row,
  Column,
  FormButton
} from "./styles";

const RegisterPage = () => {
  async function handleSubmit(data) {
    console.log(data);
    try {
      await api.post("/contract", data, {
        headers: { Authorization: token() }
      });

      const alerted = window.confirm("Cadastro salvo com sucesso!");
      if (alerted) window.location.reload()
    } catch (e) {
      const response = e.response;
      const error = (response && response.data.error) || "Ocorreu um erro";
      toast.error(error || "Verifique todos os campos");
    }
  }

  return (
    <Container>
      <Hero className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Contrato</h1>
            <h2 className="subtitle">Formulário de contrato</h2>
          </div>
        </div>
      </Hero>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <Row>
            <label>Nome:</label>
            <Input className="input" type="text" name="name" required />
          </Row>
          <Row>
            <label>Data do inicio do contrato:</label>
            <Input className="input" type="date" name="createdAt" required />
            <label>Data final do contrato:</label>
            <Input className="input" type="date" name="finalAt" required />
          </Row>
          <Row>
            <label>Email para contato:</label>
            <Input className="input" type="email" name="email" required />
          </Row>
          <Row>
            <label>Telefone (Opicional):</label>
            <Input className="input" type="tel" name="contact" />
          </Row>
          <Row>
            <label>Adicionar descrição:</label>
            <Input multiline className="textarea" name="description" required />
          </Row>
          <FormButton type="submit">SALVAR</FormButton>
          <Column />
        </FormContainer>
      </Form>
    </Container>
  );
};

export default RegisterPage;
