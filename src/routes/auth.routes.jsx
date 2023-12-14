import { Route, Routes } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { AuthLayout } from "../layouts/AuthLayout";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
