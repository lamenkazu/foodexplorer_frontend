import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { api } from "./../services/api";

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/Sessions", { email, password });
      const { user } = response.data;

      localStorage.setItem("@food_explorer:user", JSON.stringify(user));

      setData({ user });
      setLoading(false);
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível conectar");
      }
    }
  });

  const signUp = useCallback(({ name, email, password }) => {
    api
      .post("/Users", { name, email, password })
      .then(() => {
        alert("Registro realizado com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Não foi possível realizar o registro.");
        }
      });
  });

  const signOut = useCallback(() => {
    localStorage.removeItem("@food_explorer:user");

    setData({});
  });

  useEffect(() => {
    const user = localStorage.getItem("@food_explorer:user");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
    setLoading(false);
  }, []);

  const authValue = useMemo(
    () => ({
      signIn,
      signUp,
      signOut,
      user: data.user,
    }),
    [signIn, signUp, signOut, data.user, loading]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
