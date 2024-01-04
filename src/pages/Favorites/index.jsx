import { useState, useEffect } from "react";
import { useDishData } from "../../hooks/dishData";

import { Container, FavComponentWrapper } from "./styles";
import { FavComponent } from "../../components/FavComponent";

export const Favorites = () => {
  const [favDishes, setFavDishes] = useState([]);
  const { getFavoriteDishes } = useDishData();

  useEffect(() => {
    const fetchFavDishes = async () => {
      const fav = await getFavoriteDishes();
      setFavDishes(fav);
    };

    fetchFavDishes();
  }, [favDishes]);

  return (
    <Container>
      <h1>Meus Favoritos</h1>

      <FavComponentWrapper>
        {favDishes.map((favDish) => (
          <FavComponent key={favDish.dish_id} favDish={favDish}></FavComponent>
        ))}
      </FavComponentWrapper>
    </Container>
  );
};
