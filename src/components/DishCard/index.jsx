import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useDishData } from "../../hooks/dishData";

import { USER_ROLE } from "../../utils/roles";

import {
  Container,
  Cover,
  StyledButton,
  H2,
  P,
  Span,
  StyledLink,
  CustomerOptions,
} from "./styles";
import { Stepper } from "../Stepper";
import { Empty } from "../../components/Empty";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiPencilSimpleLight } from "react-icons/pi";

export const DishCard = ({ data }) => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { getDishImage, isFavorite, favDish, unfavDish } = useDishData();

  const [favorite, setFavorite] = useState(false);

  const dishImg = getDishImage(data.image);

  const goToEditPage = () => {
    navigate(`/edit/${data.dish_id}`);
  };

  const handleFavorite = () => {
    if (favorite) {
      unfavDish(data.dish_id);
      setFavorite(false);
    } else {
      favDish(data.dish_id);
      setFavorite(true);
    }
  };

  useEffect(() => {
    const checkIfDishIsFavorite = async () => {
      setFavorite(await isFavorite(data.dish_id));
    };

    if ([USER_ROLE.CUSTOMER].includes(user.role)) checkIfDishIsFavorite();
  }, []);

  return (
    <Container>
      {![USER_ROLE.ADMIN].includes(user.role) ? (
        favorite ? (
          <IoMdHeart onClick={handleFavorite} />
        ) : (
          <IoMdHeartEmpty onClick={handleFavorite} />
        )
      ) : (
        <PiPencilSimpleLight onClick={goToEditPage} />
      )}

      <StyledLink to={`/view/${data.dish_id}`}>
        <Cover src={dishImg} alt="Imagem do alimento" />
        <H2>{data.title} &gt;</H2>
        <P>{data.description}</P>
        <Span>R$ {data.price} </Span>
      </StyledLink>

      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <CustomerOptions>
          <Stepper />
          <StyledButton title="Incluir" />
        </CustomerOptions>
      ) : (
        <Empty />
      )}
    </Container>
  );
};
