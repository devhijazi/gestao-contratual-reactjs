import React, { useState, useEffect } from "react";
import { Container, Hero, FullContainer } from "./styles";

import api from "../../services/api";
import { token } from "../../services/auth.js";

import Spinner from "../../components/Loading/Spinner";


const DashBoardPage = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getContracts() {
      const { contracts } = await api
        .get("/contracts", {
          headers: { Authorization: token() }
        })
        .then(r => r.data);

      setCount(contracts.length);
      setLoading(false);
    }
    getContracts();
  }, []);

  if (loading)
    return (
      <FullContainer>
        <Spinner>
          <h1>Carregando</h1>
        </Spinner>
      </FullContainer>
    );

  return (
    <Container>
      <Hero className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Gestão Contratual</h1>
            <h2 className="subtitle">
              Olá, o banco de dados do sistema informa que há{" "}
              <span>{count}</span> arquivos registrados.
            </h2>
          </div>
        </div>
      </Hero>

      <h3>Banco de dados : 10 próximo(s) a vencer...</h3>
    </Container>
  );
};

export default DashBoardPage;
