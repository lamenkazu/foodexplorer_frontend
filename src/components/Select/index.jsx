import React from "react";
import { Container } from "./styles";

export const Select = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <option value="">Selecionar</option>
      <option value="Refeição">Refeição</option>
      <option value="Prato Principal">Prato Principal</option>
      <option value="Sobremesa">Sobremesa</option>
      <option value="Bebida">Bebida</option>
    </Container>
  );
};
