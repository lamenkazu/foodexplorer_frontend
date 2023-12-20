import {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";
import { api } from "../services/api";

import { useAuth } from "./auth";

const DishDataContext = createContext({});
const useDishData = () => useContext(DishDataContext);

const DishDataProvider = ({ children }) => {
  const { loading } = useAuth();
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    getDishesCategories();
  }, []);

  return (
    <DishDataContext.Provider
      value={{ getDishesByCategory, categories, getDishImage }}
    >
      {children}
    </DishDataContext.Provider>
  );
};

export { DishDataProvider, useDishData };
