import React from "react";
import { Container,Hero } from "./styles";

const dashBoardPage = () => {
  return (
    <Container>
          <Hero className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Painel de controle</h1>
            <h2 className="subtitle">Contém informações básicas sobre o sistema.content-start</h2>
          </div>
        </div>
      </Hero>
    </Container>
  );
};

export default dashBoardPage;
