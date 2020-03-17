import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import api from "../../services/api";
import { authenticate, setUser } from "../../services/auth";


import {
  Container,
  FormContainer,
  FormButton,
  FormInput,
} from "./styles";

const Schema = Yup.object().shape({
  password: Yup.string().required("Senha obrigatória!"),
  email: Yup.string()
    .email()
    .required("Insira o email!")
});

const capitalize = str => str[0].toUpperCase() + str.slice(1);

const HomePage = ({ history }) => {
 
  const [passwordShowing, setPasswordShowing] = useState(false);
 
  function handlePassword() {
    setPasswordShowing(!passwordShowing);
  }

  async function handleSubmit(data) {
    try {
      const validateData = await Schema.validate(data);
      const dataParams = new URLSearchParams(validateData).toString();

      const { token, user } = await api
        .get(`/auth?${dataParams}`)
        .then(r => r.data);
      await authenticate(token).catch(() => window.location.reload());
      return setUser(user).then(() => history.push("/dashboard"));
    } catch (e) {
      const ValidationError = e instanceof Yup.ValidationError;
      const response = e.response;
      const error = ValidationError
        ? `${capitalize(e.path)}: ${e.message}`
        : (response && response.data.error) || "Ocorreu um erro";
      toast.error(error || "Usuário ou senha inválido.");
    }
    console.log(process.env.REACT_APP_API_URI)
   
   
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>LOGIN</h1>
          <h6>Somente usuários cadastrados.</h6>
          <FormInput>
            <Input name="email" type="text" required />
            <label>Email</label>
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
          <FormButton type="submit">LOGIN</FormButton>
          <span className="register">
            <span>Não cadastrado ? </span>
            <Link to="/register" id="RegisterPage">
              Crie sua conta aqui.
            </Link>
          </span>
          <span className="forgot">
            <span>Esqueceu sua senha ? </span>
            <Link to="/notfound" id="ForgotPassword">
              Recupere aqui.
            </Link>
          </span>
        </FormContainer>
      </Form>
    </Container>
  );
};

export default HomePage;
