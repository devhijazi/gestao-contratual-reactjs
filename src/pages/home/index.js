import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import api from "../../services/api";
import { authenticate, setUser } from "../../services/auth";

import icon from "../../assets/others/trava.png";

import { Container, FormContainer, FormButton, FormInput } from "./styles";

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
      const error = ValidationError
        ? `${capitalize(e.path)}: ${e.message}`
        : e.response.data.error;
      toast.error(error || "Reveja suas informações!");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <img src={icon} alt="Logo" />
          <h3> ACESSO RESTRITO </h3>
          <h6>Somente usuários cadastrados no banco de dados.</h6>
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
            <span class="show" onClick={handlePassword}>
              {passwordShowing ? "OCULTAR" : "MOSTRAR"}
            </span>
            <label>Senha</label>
          </FormInput>
          <FormButton type="submit">ENTRAR</FormButton>
          <Link to="/notfound" id="forgotPassword">
            Esqueceu sua senha ? Recupere aqui
          </Link>
        </FormContainer>
      </Form>
    </Container>
  );
};

export default HomePage;
