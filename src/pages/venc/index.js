import React,{useState, useEffect} from "react";

import api from "../../services/api";
import { token } from "../../services/auth";

import moment from "moment";

import { Container, Row, RowHeader, RowItems } from "./styles";

const VencPage = () => {
  
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  //Moment fix 
  moment.locale('pt',{
    calendar:{
      sameElse: 'DD/MM/YYYY'
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
          createdAt:moment(c.createdAt,['YYYY-MM-DD']).calendar(),
          finalAt: moment(c.finalAt,['YYYY-MM-DD']).calendar()
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
                <p>{d[item.property]}</p>
              ))}
          </RowItems>
        </Row>
      ))}
    </Container>
  );
};

export default VencPage;
