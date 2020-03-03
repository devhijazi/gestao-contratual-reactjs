import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  FormContainer,
  FormButton,
  FormInput,
  Input
} from "./styles";

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
          <h3> LOGIN </h3>
          <h6>Olá usuário</h6>
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
          <FormButton onClick={notify}>LOGIN</FormButton>
          <Link to="/notfound" id="forgotPassword">
            Esqueceu sua senha ? Recupere aqui
          </Link>
        </FormContainer>
      </Form>
    </Container>
  );
};

export default HomePage;
