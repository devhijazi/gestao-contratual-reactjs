import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import api from "../../services/api";
import { token } from "../../services/auth";

import { Container, Row, RowHeader, RowItems, IconsContainer } from "./styles";

const IconsBtn = ({ item, handlePen }) => (
  <IconsContainer>
    <a href={`/edit/${item._id}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="faicons" icon="pen" color="green" />
    </a>
  </IconsContainer>
);

const VencPage = () => {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  //Moment fix
  moment.locale("pt", {
    calendar: {
      sameElse: "DD/MM/YYYY"
    }
  });

  function handlePen(itemId) {
    console.log(itemId, "itemId");
  }

  useEffect(() => {
    async function getContracts() {
      const { contracts } = await api
        .get("/contracts", {
          headers: { Authorization: token() }
        })
        .then(r => r.data);

      setItemList(
        contracts.map(c => ({
          ...c,
          createdAt: moment(c.createdAt, ["YYYY-MM-DD"]).calendar(),
          finalAt: moment(c.finalAt, ["YYYY-MM-DD"]).calendar()
        }))
      );
      setLoading(false);
    }

    getContracts();
  }, []);

  if (loading) return <h1>Carregando Banco de dados</h1>;

  const items = [
    { title: "Titulo", property: "name" },
    { title: "Contato", property: "email" },
    { title: "Data Inicial", property: "createdAt" },
    { title: "Data Final", property: "finalAt" },
    { title: "Adicionado Por", property: "createdBy" },
    { title: "Editar" }
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <Row>
          <RowHeader>
            <h6>{item.title}</h6>
          </RowHeader>
          <RowItems>
            {itemList.map(d =>
              index + 1 === items.length ? (
                <p>
                  <IconsBtn item={d} handleTrash={handlePen} />
                </p>
              ) : (
                <p>
                  <span> {d[item.property]}</span>
                </p>
              )
            )}
          </RowItems>
        </Row>
      ))}
    </Container>
  );
};

export default VencPage;
