import React from "react";

import { Button } from "./styles";

const PaginationComponent = ({ info, handleClickPagination }) => {
  const { inPage, pages } = info;

  return Array(pages + 1)
    .fill({})
    .map((_, index) => (
      <Button
        key={index}
        onClick={() => handleClickPagination(index)}
        disabled={inPage === index}
      >
        {index + 1}
      </Button>
    ));
};

export default PaginationComponent;
