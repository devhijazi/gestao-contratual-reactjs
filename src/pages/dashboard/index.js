/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { Container, Hero, FullContainer, RowGrid, RowItems } from "./styles";

import api from "../../services/api";

import Spinner from "../../components/Loading/Spinner";

import CIcon from "../../assets/svg/cloud.svg";
import Alert from "../../assets/svg/alert.svg";

const DashBoardPage = () => {
  const [data, setData] = useState({ fullLength: 0, dueLength: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getContracts() {
      const [fullLength, dueLength] = await Promise.all(
        ["", "/due"].map(r =>
          api.get(`/contracts${r}`).then(({ data }) => data.contracts)
        )
      );
      setData({fullLength, dueLength});
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
            <h1 className="title">Contrato Cloud</h1>
            <h2 className="subtitle">Gestão contratual</h2>
          </div>
        </div>
      </Hero>
      <h1>Informações da Cloud.</h1>
      <RowGrid>
        <RowItems>
          <img src={CIcon} alt="Contract Logo"></img>
          <h2>{data.fullLength.length}</h2>
          <p>Gravados</p>
        </RowItems>
        <RowItems>
          <img src={Alert} alt="Alert Icon"></img>
          <h2>{data.dueLength.length}</h2>
          <p>Prestes a vencer...</p>
        </RowItems>
      </RowGrid>
    </Container>
  );
};

export default DashBoardPage;
