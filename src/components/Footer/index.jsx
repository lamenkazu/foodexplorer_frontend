import React from "react";
import { Container } from "./styles";
import brandImg from "../../assets/Brand.png";

export const Footer = () => {
  return (
    <Container>
      <img src={brandImg} alt="Logo Food Explorer" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
};
