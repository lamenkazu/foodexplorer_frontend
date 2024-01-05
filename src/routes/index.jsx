import { useEffect } from "react";
import { useAuth } from "../hooks/auth";

import { api } from "../services/api";
import { USER_ROLE } from "./../utils/roles";

import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";

export const Routes = () => {
  const { user, signOut } = useAuth();

  useEffect(() => {
    if (user) {
      api.get("/Users/validate").catch((err) => {
        if (err.response?.status === 401) signOut();
      });
    }
  }, []);

  return (
    <BrowserRouter>
      {user ? <AccessRoute user={user} /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

const AccessRoute = ({ user }) => {
  if (user) {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;

      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;

      default:
        return <CustomerRoutes />;
    }
  }
};
