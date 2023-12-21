import {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useAuth } from "./auth";

import { api } from "../services/api";

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
    const { dish_id, title, category, price, ingredients, description } = dish;
    try {
      if (loading) return;

      return api
        .put(`/Dishes/${dish_id}`, {
          title,
          category,
          price,
          ingredients,
          description,
        })
        .then(() => {
          alert("Prato atualizado com sucesso");
        });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível atualizar o novo prato no banco de dados.");
      }
    }
  });

  const deleteDish = useCallback(async (id) => {
    try {
      if (loading) return;

      return api.delete(`/Dishes/${id}`).then(() => {
        alert("Prato deletado com sucesso");
      });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível deletar o prato do banco de dados.");
      }
    }
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
      deleteDish,
    }),
    [
      getDishImage,
      categories,
      getDishesByCategory,
      getDishById,
      createNewDish,
      updateDish,
      deleteDish,
    ]
  );

  return (
    <DishDataContext.Provider value={dishDataValue}>
      {children}
    </DishDataContext.Provider>
  );
};

export { DishDataProvider, useDishData };
