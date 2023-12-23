import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, InputWrapper } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { StyledLink } from "../../components/StyledLink";

export const SignIn = () => {
  const { signIn } = useAuth();
  const [form, setForm] = useState({
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
    signIn({ email: form.email, password: form.password });
  };

  return (
    <Container>
      <h1>Faça login</h1>

      <InputWrapper>
        <Input
          id="email"
          name="email"
          lbl="Email"
          type="email"
          placeholder="Exemplo: exemplo@mail.com"
          onChange={handleFormChanges}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSignIn();
            }
          }}
        />
        <Input
          id="password"
          name="password"
          lbl="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={handleFormChanges}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSignIn();
            }
          }}
        />
      </InputWrapper>
      <Button title="Entrar" onClick={handleSignIn} />
      <StyledLink to="/register" title="Criar uma conta" />
    </Container>
  );
};
