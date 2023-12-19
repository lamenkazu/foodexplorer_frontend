import React from "react";
import { Container } from "./styles";
import { DishCard } from "../DishCard";

export const Section = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <DishCard />
    </Container>
  );
};
