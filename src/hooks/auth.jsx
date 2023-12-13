import { useState, useEffect, createContext, useContext } from "react";
import { api } from "./../services/api";

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post(
        "/Sessions",
        { email, password },
        { withCredentials: true }
      );
      const { user } = response.data;

      localStorage.setItem("@food_explorer:user", JSON.stringify(user));

      setData({ user });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível conectar");
      }
    }
  };

  const signUp = ({ name, email, password }) => {
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
  };

  const signOut = () => {
    localStorage.removeItem("@food_explorer:user");

    setData({});
  };

  useEffect(() => {
    const user = localStorage.getItem("@food_explorer:user");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signUp, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
