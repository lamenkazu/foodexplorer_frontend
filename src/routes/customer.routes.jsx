import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { Home } from "../pages/Home";
import { ViewDish } from "../pages/ViewDish";
import { Favorites } from "../pages/Favorites";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/view/:dish_id" element={<ViewDish />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
