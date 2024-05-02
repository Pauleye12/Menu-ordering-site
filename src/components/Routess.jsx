import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Category from "./Category";
import CategoryList from "./CategoryList";
import Menulist from "./Menulist";
import VipMenulist from "./VipMenulist";
import Auth from "./Auth";

function Routess() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/category" element={<Category />}>
          <Route index element={<CategoryList />} />
          <Route path="regular-menu" element={<Menulist />} />
          <Route path="vip-auth" element={<Auth />} />
          <Route path="/category/vip-menu" element={<VipMenulist />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routess;
