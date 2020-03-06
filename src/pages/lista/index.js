import React from "react";

import { Container, Row, RowHeader, RowItems } from "./styles";

const listPage = ({ history }) => {
  const items = [
    { title: "Titulo", property: "name" },
    { title: "Email", property: "email" },
    { title: "Data Inicial", property: "createdAt" },
    { title: "Descrição", property: "description" },
    { title: "Data Final", property: "finalAt" }
  ];

  const data = [
    {
      name: "Nepto",
      createdAt: "05/03/2020",
      finalAt: "05/03/2021",
      email: "abcde@x.com",
      description: "Top mane"
    },
    {
      name: "Clinica",
      createdAt: "05/03/2020",
      finalAt: "05/03/2021",
      email: "abcde@x.com",
      description: "Teste"
    },
    {
      name: "IMPCG",
      createdAt: "05/03/2020",
      finalAt: "05/03/2021",
      email: "abcde@x.com",
      description: "SISTEMA"
    },
    {
      name: "Casa",
      createdAt: "05/03/2020",
      finalAt: "05/03/2021",
      email: "abcde@x.com",
      description: "SISTEMA"
    },
    {
      name: "Asilo",
      createdAt: "05/03/2020",
      finalAt: "05/03/2021",
      email: "abcde@x.com",
      description: "SISTEMA"
    },
    {
      name: "Farmácia",
      createdAt: "05/03/2020",
      finalAt: "05/03/2021",
      email: "abcde@x.com",
      description: "SISTEMA"
    },
    {
      name: "Ortopedista",
      createdAt: "05/03/2020",
      finalAt: "05/03/2021",
      email: "abcde@x.com",
      description: "SISTEMA"
    }
  ];
  return (
    <Container>
      {items.map(item => (
        <Row>
          <RowHeader>
            <h6>{item.title}</h6>
          </RowHeader>
          <RowItems>
            {data.map(d => (
              <p>{d[item.property]}</p>
            ))}
          </RowItems>
        </Row>
      ))}
    </Container>
  );
};
export default listPage;
