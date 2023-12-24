import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDishData } from "../../hooks/dishData";

import { DishForm } from "../../components/DishForm";

export const EditDish = () => {
  const { dish_id } = useParams();
  const { getDishById } = useDishData();

  const [data, setData] = useState({
    dishFile: null,
    title: "",
    description: "",
    category: "",
    price: "",
    ingredients: [],
    newIngredient: "",
  });

  //Busca os dados do prato para adicionar aos inputs.
  useEffect(() => {
    const fetchData = async () => {
      const response = await getDishById(dish_id);
      setData({
        dishFile: null,
        title: response?.title,
        description: response?.description,
        category: response?.category,
        price: response?.price,
        ingredients: response?.ingredients,
        newIngredient: "",
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <DishForm
        confirmMessage="Confirma atualização dos dados do prato?"
        pageTitle="Editar prato"
        dishData={data}
        dish_id={dish_id}
      />
    </>
  );
};
