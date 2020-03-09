import React from "react";

//import api from "../../services/api";
//import { token } from "../../services/auth";

//import moment from "moment";

import { Container, Row, RowHeader, RowItems } from "./styles";

const VencPage = () => {
  /*
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);

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
          createdAt: moment(c.createdAt).format("L"),
          finalAt: moment(c.finalAt).format("L")
        }))
      );
      setLoading(false);
    }

    getContracts();
  }, []);

  if (loading) return <h1>Carregando Banco de dados</h1>;
  */

  const items = [
    { title: "Titulo", property: "name" },
    { title: "Email", property: "email" },
    { title: "Data Inicial", property: "createdAt" },
    { title: "Data Final", property: "finalAt" },
    { title: "Adicionado Por", property: "createdBy" },
  ];

  return (
    <Container>
      {items.map(item => (
        <Row>
          <RowHeader>
            <h6>{item.title}</h6>
          </RowHeader>
          <RowItems>
            <h1>Em construção</h1>
          </RowItems>
        </Row>
      ))}
    </Container>
  );
};

export default VencPage;
