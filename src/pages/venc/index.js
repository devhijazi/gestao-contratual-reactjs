import React, { useState, useEffect } from "react";
import moment from "moment";

import api from "../../services/api";

import Spinner from "../../components/Loading/Spinner";

import ItemsComponent from "./components/items";
import PaginationComponent from "./components/pagination";

import { Container, FullContainer } from "./styles";

const VencPage = () => {
  const [loading, setLoading] = useState(true);

  const [itemList, setItemList] = useState([]);
  const [pageInfo, setPageInfo] = useState({ inPage: 0 });

  function handleClickPagination(page = 0) {
    setLoading(true);
    return getContracts(page);
  }

  //Moment fix
  moment.locale("pt", {
    calendar: {
      sameElse: "DD/MM/YYYY"
    }
  });

  async function getContracts(page = 0) {
    const { contracts, ...rest } = await api
      .get(`/contracts/due?page=${page}`)
      .then(r => r.data);

    setItemList(
      contracts.map(c => ({
        ...c,
        createdAt: moment(c.createdAt, ["YYYY-MM-DD"]).calendar(),
        finalAt: moment(c.finalAt, ["YYYY-MM-DD"]).calendar()
      }))
    );
    setPageInfo({ ...pageInfo, ...rest });
    setLoading(false);
  }

  useEffect(() => {
    getContracts();
  }, []);

  if (loading) {
    return (
      <FullContainer>
        <Spinner>
          <h1>Carregando</h1>
        </Spinner>
      </FullContainer>
    );
  }

  return (
    <Container>
      <div className="items">
        <ItemsComponent list={itemList}/>
      </div>
      <div className="navigation">
        <PaginationComponent
          info={pageInfo}
          handleClickPagination={handleClickPagination}
        />
      </div>
    </Container>
  );
};

export default VencPage;
