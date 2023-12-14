import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ViewDish } from "../pages/ViewDish";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view" element={<ViewDish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
