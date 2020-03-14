import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

import Spinner from "../../components/Loading/Spinner";

import ItemsComponent from "./components/items";
import PaginationComponent from "./components/pagination";

import api from "../../services/api";
import { token } from "../../services/auth";

import { Container, FullContainer } from "./styles";

const ListPage = () => {
  const [loading, setLoading] = useState(true);

  const [itemList, setItemList] = useState([]);
  const [pageInfo, setPageInfo] = useState({ inPage: 0 });

  function handleClickPagination(page = 0) {
    setLoading(true);
    return getContracts(page);
  }

  async function handleTrash(itemId) {
    try {
      const deleted = window.confirm("Deseja realmente excluir este contrato?");
      if (deleted) {
        await api
          .delete(`/contracts/${itemId}`)
          .then(() => window.location.reload());
      }
    } catch (e) {
      const response = e.response;
      const error = (response && response.data.error) || "Erro ao deletar";
      toast.error(error || "Ocorreu um erro ao deletar este contrato");
    }
  }

  async function getContracts(page = 0) {
    const { contracts, ...rest } = await api
      .get(`/contracts?page=${page}`, { headers: { Authorization: token() } })
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
        <ItemsComponent list={itemList} handleTrash={handleTrash} />
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

export default ListPage;
