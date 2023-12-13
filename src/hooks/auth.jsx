import { useState, useEffect, createContext, useContext } from "react";
import { api } from "./../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const signIn = async ({ email, password }) => {};

  const signOut = () => {};

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
