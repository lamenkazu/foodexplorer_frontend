import React from "react";
import { Container } from "./styles";

export const GoBack = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
