import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import api from "../../services/api";
import { Form, Input } from "@rocketseat/unform";

import { Container, Hero, FormContainer, Row, FormButton } from "./styles";

const EditPage = ({ match: { params }, history }) => {
  const [initialData, setInitialData] = useState({});
  const { id } = params;

  async function handleUpdate(data) {
    try {
      const updated = window.confirm("Contrato atualizado com sucesso!");
      if (updated) {
        await api.put(`/contracts/${id}`, data).then(() => window.close());
      }
    } catch (e) {
      const response = e.response;
      const error = (response && response.data.error) || "Erro ao atualizar";
      toast.error(error || "Ocorreu um erro ao atualizar o contrato");
    }
  }
  
  useEffect(() => {
    async function getContract() {
      try {
        const { contract } = await api
          .get(`/contracts/${id}`)
          .then(r => r.data);

        setInitialData(contract);
      } catch (e) {
        history.push("/list");
      }
    }
    getContract();
  }, []);

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
      <Form onSubmit={handleUpdate} initialData={initialData}>
        <FormContainer>
          <Row>
            <span>Titulo atual : </span>
            <Input className="input" type="text" name="name" />
            <span>Email atual : </span>
            <Input className="input" type="email" name="email" />
            <span>Telefone Atual : </span>
            <Input className="input" type="tel" name="contact" />
            <span>Data de Inicio : </span>
            <Input className="input" type="date" name="createdAt" />
            <span>Data Final : </span>
            <Input className="input" type="date" name="finalAt" />
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
