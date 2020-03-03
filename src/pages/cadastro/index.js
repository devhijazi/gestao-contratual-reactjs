import React from "react";
import {
  Container,
  FormContainer,
  FormInput,
  Input,
  FormButton
} from "./styles";

const cadastroPage = ({ history }) => {
  return (
    <Container>
      <FormContainer>
        <FormInput>
            <Input type="text" placeholder="Digite o texto aqui..."/>
            <label>Nome</label>
        </FormInput>
        <FormInput>
         <Input type="textarea" placeholder="Descrição curta"/>
         <label>Sobre</label>
        </FormInput>
        <FormInput>
          <Input type="date" placeholder="dd/mm/aaaa" />
          <label>Inicio do contrato</label>
        </FormInput>
        <FormInput>
          <Input name="date" type="date" />
          <label>Término do contrato</label>
        </FormInput>
        <FormInput>
          <Input type="email" placeholder="example@live.com"/>
          <label>Email do contrato ou pessoa cadastrado(a)</label>
        </FormInput>
        <FormInput>
          <Input type="phone" placeholder="(ddd)0000-0000"/>
          <label>Telefone para contato</label>
        </FormInput>
        <FormButton>CONCLUIR</FormButton>
      </FormContainer>
    </Container>
  );
};

export default cadastroPage;
