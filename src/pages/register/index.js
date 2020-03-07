import React, { useState } from "react";
/*import { toast } from "react-toastify";*/

import { Form, Input } from "@rocketseat/unform";

/*import api from "../../services/api";*/
/*import { NoAuthenticate, registerUser } from "../../services/auth";*/

import { Container, FormContainer, FormButton, FormInput } from "./styles";

import registerUserLogo from "../../assets/others/new_user.png";

const RegisterPage = ({ history }) => {
  const [passwordShowing, setPasswordShowing] = useState(false);
  function handlePassword() {
    setPasswordShowing(!passwordShowing);
  }
  /*
  async function handleSubmit(data) {
    console.log(data);
    try {
      const { token, user } = await api.post(`/admin`).then(r => r.data);
      await NoAuthenticate(token).catch(() => window.location.reload());
      return registerUser(user).then(() => history.push("/"));
    } catch (e) {
      const response = e.response;
      const error = (response && response.data.error) || "Ocorreu um erro";
      toast.error(error || "Erro ao registrar uma nova conta");
    }
  }
  */
  return (
    <Container>
      <Form /*onSubmit={handleSubmit}*/>
        <FormContainer>
          <img src={registerUserLogo} alt="Logo" />
          <h1>CADASTRAR</h1>
          <h6>Cadastre uma nova conta.</h6>
          <FormInput>
            <Input name="email" type="text" required />
            <label>Email</label>
          </FormInput>
          <FormInput>
            <Input name="name" type="text" required />
            <label>Nome</label>
          </FormInput>
          <FormInput>
            <Input
              name="password"
              type={passwordShowing ? "text" : "password"}
              required
            />
            <span className="show" onClick={handlePassword}>
              {passwordShowing ? "OCULTAR" : "MOSTRAR"}
            </span>
            <label>Senha</label>
          </FormInput>
          <FormButton type="submit">CONFIRMAR</FormButton>
        </FormContainer>
      </Form>
     
    </Container>
  );
};

export default RegisterPage;
