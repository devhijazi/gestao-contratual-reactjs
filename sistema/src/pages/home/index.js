import React, { useState } from "react";
import api from "../../services/api.js";
import {
  Container,
  FormContainer,
  FormButton,
  FormInput,
  Input
} from "./styles";

const HomePage = ({ history }) => {
  const [formData, setFormData] = useState({});
  const [passwordShowing, setPasswordShowing] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const params = new URLSearchParams(formData);
    try {
      const { token } = await api
        .get(`/auth?${params.toString()}`)
        .then(r => r.data);
      localStorage.setItem("token", token);
      const { user } = await api
        .get(`/auth?${params.toString()}`)
        .then(r => r.data);
      localStorage.setItem("user", user);
      return history.push("/dashboard");
    } catch (e) {}
  };

  const setData = e => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePassword = () => setPasswordShowing(!passwordShowing);


  return (
    <Container>
      <form onSubmit={handleSubmit} onChange={setData}>
        <FormContainer>
          <h3>ACESSO RESTRITO</h3>
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
          <FormButton>ENTRAR</FormButton>
        </FormContainer>
      </form>
    </Container>
  );
};

export default HomePage;
