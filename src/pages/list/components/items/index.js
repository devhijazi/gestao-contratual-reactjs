import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { items } from "../../config";

import { Row, RowHeader, RowItems, IconsContainer } from "./styles";

const ItemsComponent = ({ list, handleTrash }) => {
  if (!list.length) return <h1>Nenhum contrato cadastrado</h1>;

  return items.map((item, i) => (
    <Row key={item.title}>
      <RowHeader>
        <h6>{item.title}</h6>
      </RowHeader>
      <RowItems>
        {list.map(d => (
          <p key={d._id}>
            <HandleItem
              item={d}
              index={i + 1}
              length={items.length}
              handleTrash={handleTrash}
            >
              {d[item.property]}
            </HandleItem>
          </p>
        ))}
      </RowItems>
    </Row>
  ));
};

const HandleItem = ({ index, length, item, handleTrash, children }) => {
  if (index === length) {
    return <IconsBtn item={item} handleTrash={handleTrash} />;
  }
  return <span>{children}</span>;
};

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

export default ItemsComponent;
