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
            <h1 className="title">Gestão Contratual</h1>
            <h2 className="subtitle">
              Olá, o banco de dados do sistema informa que há{" "}
              <span>{count}</span> arquivos registrados.
            </h2>
          </div>
        </div>
      </Hero>
    </Container>
  );
};

export default DashBoardPage;
