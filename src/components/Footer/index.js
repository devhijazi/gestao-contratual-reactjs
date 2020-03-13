import React from "react";
import moment from "moment";
import { Container, DeveloperContainer, DeveloperContent } from "./styles";

const FooterComponent = () => {
  const hoje = moment(Date.now()).format("YYYY");

  return (
    <Container>
      <DeveloperContainer>
        <DeveloperContent>
          Copyright  © 
          <a href="https://github.com/devhijazi">
            {hoje}
          </a>
        </DeveloperContent>
      </DeveloperContainer>
    </Container>
  );
};

export default FooterComponent;
