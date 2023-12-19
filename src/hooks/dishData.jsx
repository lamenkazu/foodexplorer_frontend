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
  const [allDishesData, setAllDishesData] = useState([]);

  const getAllDishes = useCallback(async () => {
    try {
      if (loading) return;

      const response = await api.get("/Dishes?title&ingredients");
      setAllDishesData(response.data);
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível conectar");
      }
    }
  });

  useEffect(() => {
    getAllDishes();
  }, []);

  return (
    <DishDataContext.Provider value={{ getAllDishes, allDishesData }}>
      {children}
    </DishDataContext.Provider>
  );
};

export { DishDataProvider, useDishData };
