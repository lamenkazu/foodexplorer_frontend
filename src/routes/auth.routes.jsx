import { Route, Routes } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { AuthLayout } from "../layouts/AuthLayout";
import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<h1>Bem vindo</h1>} />

        <Route path="*" exact={true} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
