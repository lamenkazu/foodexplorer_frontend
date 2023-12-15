import React from "react";
import { Container, HeaderCard, HeaderMain } from "./styles";
import homeHeaderImg from "../../assets/homeHeader.png";

export const Home = () => {
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
    </Container>
  );
};
