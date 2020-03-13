import React from "react";

import { toast } from "react-toastify";

import api from "../../services/api";
import { Form, Input } from "@rocketseat/unform";

import { Container, Hero, FormContainer, Row, FormButton } from "./styles";

const EditPage = ({ match: { params }, history }) => {
  async function handleUpdate(itemId) {
    try {
      const updated = window.confirm("Contrato atualizado com sucesso!");
      if (updated) {
        await api
          .post(`/contracts/update/id`)
          .then(() => window.close());
      }
    } catch (e) {
      console.log(e);
      const response = e.response;
      const error = (response && response.data.error) || "Erro ao atualizar";
      toast.error(error || "Ocorreu um erro ao atualizar o contrato");
    }
  }

  return (
    <Container>
      <Hero>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">EDITAR</h1>
            <h2 className="subtitle">Edite um contrato</h2>
          </div>
        </div>
      </Hero>
      <Form onSubmit={handleUpdate}>
        <FormContainer>
          <Row>
            <span>Titulo atual : </span>
            <Input
              className="input"
              type="text"
              name="name"
              placeholder="Novo título"
            />
            <span>Email atual : </span>
            <Input
              className="input"
              type="email"
              name="email"
              placeholder="Novo email"
            />
            <span>Telefone Atual : </span>
            <Input
              className="input"
              type="tel"
              name="contact"
              placeholder="Novo telefone"
            />
            <span>Data de Inicio : </span>
            <Input className="input" type="date" name="name" />
            <span>Data Final : </span>
            <Input className="input" type="date" name="name" />
            <span>Descrição: </span>
            <Input multiline className="textarea" name="description" />
          </Row>
          <FormButton>ATUALIZAR</FormButton>
        </FormContainer>
      </Form>
    </Container>
  );
};

export default EditPage;
