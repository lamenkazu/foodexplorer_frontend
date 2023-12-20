import { useEffect, useState } from "react";
import { Container, HeaderCard, HeaderMain } from "./styles";
import { DishCard } from "../../components/DishCard";
import { Section } from "../../components/Section";

import homeHeaderImg from "../../assets/homeHeader.png";
import { useDishData } from "../../hooks/dishData";

export const Home = () => {
  const { categories } = useDishData();

  return (
    <Container>
      <HeaderMain>
        <img
          src={homeHeaderImg}
          alt="Hamburguers flutuando de forma aesthetic"
        />

        <HeaderCard>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </HeaderCard>
      </HeaderMain>

      {categories?.map((dish) => (
        <Section key={dish.dish_id} title={dish.category}></Section>
      ))}
    </Container>
  );
};
