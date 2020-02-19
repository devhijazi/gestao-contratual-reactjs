import React from "react";

import {
  Container,
  DeveloperContainer,
  DeveloperContent
} from "./styles";

const FooterComponent = () => {
  return (
    <Container>
      <DeveloperContainer>
        <DeveloperContent>
          PRIVADO PARA:
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.campogrande.ms.gov.br/impcg/"
          >
             [IMPCG]
          </a>
        </DeveloperContent>
      </DeveloperContainer>
    </Container>
  );
};

export default FooterComponent;
