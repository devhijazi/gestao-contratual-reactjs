import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { token } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import { Container, Row, RowHeader, RowItems, infosContainer } from "./styles";

const IconsBtn = () => (
  <>
    <span>
      <FontAwesomeIcon className="faicons" icon="trash" color="red" />
    </span>
    <span>
      <FontAwesomeIcon className="faicons" icon="pen" color="green" />
    </span>
  </>
);

const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);

  moment.locale("pt", {
    calendar: {
      sameElse: "DD/MM/YYYY"
    }
  });

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
    { title: "Descrição", property: "description", wrap: true }
  ];

  return (
    <Container>
      {items.map(item => (
        <Row>
          <RowHeader>
            <h6>{item.title}</h6>
          </RowHeader>
          <RowItems>
            {itemList.map(d => (
              <p>
                <infosContainer>
                  {d[item.property]}
                  {item.wrap && <IconsBtn />}
                </infosContainer>
              </p>
            ))}
          </RowItems>
        </Row>
      ))}
    </Container>
  );
};

export default ListPage;
