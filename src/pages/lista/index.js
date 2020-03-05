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
      createdAt: "Ontem",
      finalAt: "2021",
      email: "abcde@x.com",
      description: "Top mane"
    },
    {
      name: "Nepto 2",
      createdAt: "Ontem",
      finalAt: "2021",
      email: "abcde@x.com",
      description: "Top mane"
    },
    {
      name: "Nepto 3",
      createdAt: "Ontem",
      finalAt: "2021",
      email: "abcde@x.com",
      description: "Top mane"
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
              <p>{data[item.property]}</p>
            ))}
          </RowItems>
        </Row>
      ))}
    </Container>
  );
};
export default listPage;
