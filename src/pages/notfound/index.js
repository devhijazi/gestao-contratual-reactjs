import React, { useState } from "react";

import { Container } from "./styles";

const NotFoundPage = ({ history }) => {
  const [backIsShow, setBackIsShow] = useState(false);

  const handleBackHome = () => setBackIsShow(!backIsShow);
  const handleClick = () => history.push("/");

  return (
    <Container show={backIsShow}>
      <div>
        <h1>404</h1>
        <h2
          onMouseEnter={handleBackHome}
          onMouseLeave={handleBackHome}
          onClick={handleClick}
          role="presentation"
        >
          <span>Erro</span>
          <span>Voltar Inicio</span>
        </h2>
        <h5>Algo inexperado aconteceu, clique no botão para voltar o inicio</h5>
      </div>
    </Container>
  );
};
export default NotFoundPage;
