import { useState, useEffect } from "react";
import { useDishData } from "../../hooks/dishData";

import { Container, HeaderCard, HeaderMain } from "./styles";
import { Section } from "../../components/Section";

import homeHeaderImg from "../../assets/homeHeader.png";
import homeHeaderDesktopImg from "../../assets/homeHeaderDesktop.png";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Home = () => {
  const { categories } = useDishData();

  const desktopSize = Number(
    DEVICE_BREAKPOINTS.LG.replace(/\D/g, "") //remove todos os caracteres não numéricos da string, deixando apenas os números.
  );

  const [isDesktop, setIsDesktop] = useState(window.innerWidth <= desktopSize);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth < desktopSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktopSize, isDesktop]);

  return (
    <Container>
      {console.log(isDesktop)}
      <HeaderMain>
        <img
          src={isDesktop ? homeHeaderImg : homeHeaderDesktopImg}
          alt="Hamburguers flutuando de forma aesthetic"
        />

        <HeaderCard>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </HeaderCard>
      </HeaderMain>

      {categories?.map((category, index) => (
        <Section key={index} title={category}></Section>
      ))}
    </Container>
  );
};
