import React from "react";
import moment from "moment";
import { Container, DeveloperContainer, DeveloperContent } from "./styles";

const FooterComponent = () => {
  const hoje = moment(Date.now()).format("DD/MM/YYYY");

  return (
    <Container>
      <DeveloperContainer>
        <DeveloperContent>
          Copyright  © 2020
          <a href="github.com/devhijazi">
            {hoje}
          </a>
        </DeveloperContent>
      </DeveloperContainer>
    </Container>
  );
};

export default FooterComponent;
