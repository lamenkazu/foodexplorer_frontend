import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useDishData } from "../../hooks/dishData";

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
import { api } from "../../services/api";

export const DishCard = ({ data }) => {
  const { user } = useAuth();
  const { getDishImage } = useDishData();
  const [stepper, setStepper] = useState(0);

  const addOnStepper = () => {
    setStepper(stepper + 1);
  };
  const removeFromStepper = () => {
    if (stepper === 0) return;
    setStepper(stepper - 1);
  };

  const dishImg = getDishImage(data.image);

  return (
    <Container>
      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <CiHeart />
      ) : (
        <PiPencilSimpleLight />
      )}

      <Cover src={dishImg} alt="Imagem do alimento" />
      <P>{data.title} &gt;</P>
      <Span>R$ {data.price} </Span>

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
