import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { items } from "../../config";

import { Row, RowHeader, RowItems, IconsContainer } from "./styles";

const HandleItem = ({ index, length, item, handlePen, children }) => {
  if (index === length) {
    return <IconsBtn item={item} handlePen={handlePen} />;
  }
  return <span>{children}</span>;
};

const ItemsComponent = ({ list, handlePen }) => {
  if (!list.length) return <h1>Nenhum contrato na lista de vencimentos</h1>;

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
              lenght={items.length}
              handlePen={handlePen}
            >
              {d[item.property]}
            </HandleItem>
          </p>
        ))}
      </RowItems>
    </Row>
  ));
};
const IconsBtn = ({ item }) => (
  <IconsContainer>
    <a href={`/edit/${item._id}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="faicons" icon="pen" color="green" />
    </a>
  </IconsContainer>
);

export default ItemsComponent;
