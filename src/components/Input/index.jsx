import React from "react";
import { Container, Label, StyledInput } from "./styles";

export const Input = ({ id, lbl, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={id}>{lbl}</Label>
      <StyledInput id={id} {...rest} />
    </Container>
  );
};
