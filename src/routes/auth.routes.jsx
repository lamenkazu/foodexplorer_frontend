import { Route, Routes } from "react-router-dom";

import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Oi</h1>} />
      <Route path="/register" element={<h1>Bem vindo</h1>} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
