import { useEffect, useState } from "react";
import { useDishData } from "../../hooks/dishData";

import { Container } from "./styles";
import { DishCard } from "../DishCard";

export const Section = ({ title }) => {
  const { getDishesByCategory } = useDishData();

  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const dishesBy = await getDishesByCategory(title);
      setData(dishesBy);
    };

    fetch();
  }, []);
  return (
    <Container>
      {console.log(data)}
      <h3>{title}</h3>
      {data?.map((dish) => (
        <DishCard data={dish} />
      ))}
    </Container>
  );
};
