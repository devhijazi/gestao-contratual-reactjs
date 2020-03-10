import React, { useState, useEffect } from "react";
import { Container, Hero, CounterContainer } from "./styles";

import api from "../../services/api";
import { token } from "../../services/auth.js";

const DashBoardPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getContracts() {
      const { contracts } = await api
        .get("/contracts", {
          headers: { Authorization: token() }
        })
        .then(r => r.data);

      setCount(contracts.length);
    }
    getContracts();
  }, []);

  return (
    <Container>
      <Hero className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Painel de controle</h1>
            <h2 className="subtitle">
              Contém informações básicas sobre o sistema.
            </h2>
          </div>
        </div>
      </Hero>
      <CounterContainer>
        <h2>Contratos cadastrados</h2>
        <h1>{count}</h1>
      </CounterContainer>
    </Container>
  );
};

export default DashBoardPage;
