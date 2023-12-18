import { Container, Cover, Stepper, StyledButton, P, Span } from "./styles";

import { CiHeart } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

import coverImg from "../../assets/Mask group.png";
import { useState } from "react";

export const DishCard = () => {
  const [stepper, setStepper] = useState(0);

  const addOnStepper = () => {
    setStepper(stepper + 1);
  };
  const removeFromStepper = () => {
    if (stepper === 0) return;
    setStepper(stepper - 1);
  };

  return (
    <Container>
      <CiHeart />
      <Cover src={coverImg} alt="Imagem do alimento" />
      <P>Salada Ravanello &gt;</P>
      <Span>R$ 49,97</Span>

      <Stepper>
        <FiMinus onClick={removeFromStepper} />
        <p>{stepper}</p>
        <BsPlusLg onClick={addOnStepper} />
      </Stepper>

      <StyledButton title="Incluir" />
    </Container>
  );
};
