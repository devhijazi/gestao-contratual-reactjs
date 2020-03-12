import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import api from "../../services/api";
import { token } from "../../services/auth";

import { Container, Row, RowHeader, RowItems, IconsContainer } from "./styles";

const IconsBtn = ({ item, handleTrash }) => (
  <IconsContainer>
    <button onClick={() => handleTrash(item._id)}>
      <FontAwesomeIcon className="faicons" icon="trash" color="red" />
    </button>
    <a href={`/edit/${item._id}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="faicons" icon="pen" color="green" />
    </a>
  </IconsContainer>
);

const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);

  moment.locale("pt", {
    calendar: {
      sameElse: "DD/MM/YYYY"
    }
  });

  function handleTrash(itemId) {
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
    { title: "Descrição", property: "description" },
    { title: "Acões" }
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
                  <IconsBtn item={d} handleTrash={handleTrash} />
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

export default ListPage;
