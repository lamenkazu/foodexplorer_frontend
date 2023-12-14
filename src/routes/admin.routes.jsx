import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ViewDish } from "../pages/ViewDish";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { NotFound } from "../pages/NotFound";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view" element={<ViewDish />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit" element={<EditDish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
