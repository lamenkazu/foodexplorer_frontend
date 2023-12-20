import { useState } from "react";

import { useAuth } from "../../hooks/auth";
import { useDishData } from "../../hooks/dishData";

import {
  Container,
  Cover,
  StyledButton,
  P,
  Span,
  Empty,
  StyledLink,
} from "./styles";
import { Stepper } from "../Stepper";

import { CiHeart } from "react-icons/ci";
import { PiPencilSimpleLight } from "react-icons/pi";

import { USER_ROLE } from "../../utils/roles";

export const DishCard = ({ data }) => {
  const { user } = useAuth();
  const { getDishImage } = useDishData();

  const dishImg = getDishImage(data.image);

  return (
    <Container>
      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <CiHeart />
      ) : (
        <PiPencilSimpleLight />
      )}

      <StyledLink to={`/view/${data.dish_id}`}>
        <Cover src={dishImg} alt="Imagem do alimento" />
        <P>{data.title} &gt;</P>
        <Span>R$ {data.price} </Span>
      </StyledLink>

      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <>
          <Stepper />
          <StyledButton title="Incluir" />
        </>
      ) : (
        <Empty></Empty>
      )}
    </Container>
  );
};
