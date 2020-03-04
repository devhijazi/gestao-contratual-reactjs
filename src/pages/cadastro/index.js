import React from "react";
import {
  Container,
  FormContainer,
  Row,
  Column,
  FormButton,
 
} from "./styles";

const RegisterPage = ({ history }) => {
  return (
    <Container>
      <FormContainer>
     
          <h1>CADASTRO DE CONTRATO</h1>
          <Row>
            <input
              className="input "
              type="text"
              placeholder="Nome"
              name="name"
            />
          </Row>
          <Row>
          
            <input className="input" type="date" name="dateStart" />
            <input className="input " type="date" name="dateEnd" />
          </Row>
          <Row>
            <input
              className="input"
              type="email"
              placeholder="example@example.com.br"
              name="email"
            />
          </Row>
          <Row>
            <a className="button is-static">+55</a>
            <p className="control is-expanded">
              <input
                className="input"
                type="tel"
                placeholder="Telefone (Opcional)"
                name="telefone"
              />
            </p>
          </Row>
          <Row>
            <input
              className="input is-danger"
              type="multiline"
              placeholder="Breve descrição"
              name="description"
            />
          </Row>
          <FormButton type="submit">SALVAR</FormButton>
          <Column />
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;
