import React from "react";
import { Container, FormContainer, FormInput, Input,FormButton } from "./styles";

const dashBoardPage = ({}) => {
  return (
    <Container>
      <FormContainer>
        <h3>CADASTRO</h3>
        <FormInput>
          <Input name="name" type="text" required>
            <label>Nome/Fantasia</label>
          </Input>
        </FormInput>
        <FormInput>
          <Input name="name" type="text" required>
            <label>Descrição Breve</label>
          </Input>
        </FormInput>
        <FormInput>
          <Input name="date" type="date" required>
            <label>Data</label>
          </Input>
        </FormInput>
        <FormInput>
          <Input name="text" type="text" required>
            <label>OBS:</label>
          </Input>
        </FormInput>
        <FormButton>CONCLUIR</FormButton>
        <h4>*Após a conclusão certifique-se que o popUp de cadastro realizado com sucesso apareça.*</h4>
      </FormContainer>
    </Container>
  );
};
export default dashBoardPage;
