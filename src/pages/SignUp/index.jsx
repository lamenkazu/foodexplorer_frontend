import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, InputWrapper } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { StyledLink } from "../../components/StyledLink";

export const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = () => {
    signUp({ email: form.email, name: form.name, password: form.password });
    navigate("/");
  };

  return (
    <Container>
      <InputWrapper>
        <Input
          id="name"
          name="name"
          lbl="Nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={handleFormChanges}
        />
        <Input
          id="email"
          name="email"
          lbl="Email"
          type="email"
          placeholder="Exemplo: exemplo@mail.com"
          onChange={handleFormChanges}
        />
        <Input
          id="password"
          name="password"
          lbl="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={handleFormChanges}
        />
      </InputWrapper>
      <Button title="Criar conta" onClick={handleSignIn} />
      <StyledLink to="/" title="Já tenho uma conta" />
    </Container>
  );
};
