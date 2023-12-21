import {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { api } from "../services/api";

import { useAuth } from "./auth";

const DishDataContext = createContext({});
const useDishData = () => useContext(DishDataContext);

const DishDataProvider = ({ children }) => {
  const { loading } = useAuth();
  const [categories, setCategories] = useState([]);

  const createNewDish = useCallback(async (newDish, newDishFile) => {
    try {
      if (loading) return;

      const formData = new FormData();
      formData.append("dish", JSON.stringify(newDish));
      formData.append("image", newDishFile);

      return await api
        .post("/Dishes", formData)
        .then((message) => alert(message));
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível criar um novo prato no banco de dados.");
      }
    }
  });

  const updateDish = useCallback(async (dish, dishFile) => {
    console.log(dish, dishFile);
  });

  const getDishesCategories = useCallback(async () => {
    try {
      if (loading) return;

      const response = await api.get("/Dishes?title&category&ingredients");
      setCategories(
        response.data.map((dish) => ({
          dish_id: dish.dish_id,
          category: dish.category,
        }))
      );

      return categories;
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível acessar o banco de dados");
      }
    }
  });

  const getDishesByCategory = useCallback(async (category) => {
    try {
      if (loading) return;

      const response = await api.get(
        `/Dishes?title&category=${category}&ingredients`
      );

      return response.data;
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível acessar o banco de dados");
      }
    }
  });

  const getDishImage = useCallback((img) => {
    try {
      const response = `${api.defaults.baseURL}/files/${img}`;

      return response;
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível recuperar a imagem");
      }
    }
  });

  const getDishById = useCallback(async (id) => {
    try {
      if (loading) return;

      const response = await api.get(`/Dishes/${id}`);

      return response.data;
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível acessar os dados desse prato.");
      }
    }
  });

  useEffect(() => {
    getDishesCategories();
  }, []);

  const dishDataValue = useMemo(
    () => ({
      getDishesByCategory,
      categories,
      getDishImage,
      getDishById,
      createNewDish,
      updateDish,
    }),
    [
      getDishImage,
      categories,
      getDishesByCategory,
      getDishById,
      createNewDish,
      updateDish,
    ]
  );

  return (
    <DishDataContext.Provider value={dishDataValue}>
      {children}
    </DishDataContext.Provider>
  );
};

export { DishDataProvider, useDishData };
