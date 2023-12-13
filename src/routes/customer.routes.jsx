import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
