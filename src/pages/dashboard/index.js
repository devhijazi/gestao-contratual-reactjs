import React, { useState, useEffect } from "react";
import { Container, Hero, CounterContainer } from "./styles";

import api from "../../services/api";
import { token } from "../../services/auth.js";

import moment from "moment";

const DashBoardPage = () => {
  const [count, setCount] = useState(0);
  const hoje = moment(Date.now()).format("DD/MM/YYYY");

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
              Gestão contratual via cloud storage
            </h2>
          </div>
        </div>
      </Hero>
      <CounterContainer>
        <h1>
          Armazenado:
          <span> {count} contratos</span>
        </h1>
      </CounterContainer>
      <CounterContainer>
        <h1>
          Dia de Hoje:
          <span> {hoje} </span>
        </h1>
      </CounterContainer>
    </Container>
  );
};

export default DashBoardPage;
