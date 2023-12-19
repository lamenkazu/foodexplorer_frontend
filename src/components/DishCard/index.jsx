import { useState } from "react";
import {
  Container,
  Cover,
  Stepper,
  StyledButton,
  P,
  Span,
  Empty,
} from "./styles";

import { CiHeart } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { PiPencilSimpleLight } from "react-icons/pi";

import coverImg from "../../assets/Mask group.png";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export const DishCard = () => {
  const { user } = useAuth();
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
      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <CiHeart />
      ) : (
        <PiPencilSimpleLight />
      )}

      <Cover src={coverImg} alt="Imagem do alimento" />
      <P>Salada Ravanello &gt;</P>
      <Span>R$ 49,97</Span>

      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <>
          <Stepper>
            <FiMinus onClick={removeFromStepper} />
            <p>{stepper}</p>
            <BsPlusLg onClick={addOnStepper} />
          </Stepper>
          <StyledButton title="Incluir" />
        </>
      ) : (
        <Empty></Empty>
      )}
    </Container>
  );
};
