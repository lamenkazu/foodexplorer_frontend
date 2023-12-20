import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { Home } from "../pages/Home";
import { ViewDish } from "../pages/ViewDish";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { NotFound } from "../pages/NotFound";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/view/:dish_id" element={<ViewDish />} />
        <Route path="/new" element={<NewDish />} />
        <Route path="/edit" element={<EditDish />} />
      </Route>

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
