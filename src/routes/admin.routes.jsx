import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { Home } from "../pages/Home";
import { ViewDish } from "../pages/ViewDish/index";
import { NewDish } from "../pages/NewDish/index";
import { EditDish } from "../pages/EditDish/index";
import { NotFound } from "../pages/NotFound/index";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/view/:dish_id" element={<ViewDish />} />
        <Route path="/new" element={<NewDish />} />
        <Route path="/edit/:dish_id" element={<EditDish />} />
      </Route>

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
