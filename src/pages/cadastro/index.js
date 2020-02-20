import React from "react";
import {
  Container,
  FormContainer,
  FormInput,
  Input,
  FormButton
} from "./styles";

const cadastroPage = ({history}) => {

 window.alert(`
 Sistema de cadastro indisponível no momento
 Pressione 'OK' para visualizar a pagina.`);
  return (
    <Container>
      <FormContainer>
        <h3>CADASTRO</h3>
        <FormInput>
          <Input type="text" name="name" />
          <label>Nome/Fantasia</label>
        </FormInput>
        <FormInput>
          <Input name="name" type="textarea" />
          <label>Descrição Breve</label>
        </FormInput>
        <FormInput>
          <Input name="date" type="date" />
          <label>Data Inicio</label>
        </FormInput>
        <FormInput>
          <Input name="date" type="date" />
          <label>Data Término</label>
        </FormInput>
        <FormInput>
          <Input name="text" type="textarea" />
          <label>OBS:</label>
        </FormInput>
        <FormButton>

          CONCLUIR
         
        </FormButton>
        <h4>
          *Após a conclusão certifique-se que o popUp de cadastro realizado com
          sucesso apareça.*
        </h4>
      </FormContainer>
    </Container>
  );
};

export default cadastroPage;
