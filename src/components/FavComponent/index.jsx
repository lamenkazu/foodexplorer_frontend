import React from "react";
import { useDishData } from "../../hooks/dishData";

import { Container, Cover, Details } from "./styles";

const confirmMessage =
  "Tem certeza que deseja remover este prato dos seus favoritos?";

export const FavComponent = ({ favDish }) => {
  const { unfavDish, getDishImage } = useDishData();

  const handleRemove = (id) => {
    if (confirm(confirmMessage)) {
      unfavDish(id);
    }
  };

  const dishImg = getDishImage(favDish.image);

  return (
    <Container>
      <Cover src={dishImg} alt={`imagem do ${favDish.title}`} />
      <Details>
        <h3> {favDish.title} </h3>
        <button
          onClick={() => {
            handleRemove(favDish.dish_id);
          }}
        >
          remover dos favoritos
        </button>
      </Details>
    </Container>
  );
};
