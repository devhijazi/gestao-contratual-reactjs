import React from "react";
import { Container, Hero, CounterContainer } from "./styles";

const dashBoardPage = () => {
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
        <h1>0</h1>
      </CounterContainer>
    </Container>
  );
};

export default dashBoardPage;
