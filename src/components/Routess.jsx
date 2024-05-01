import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Category from "./Category";
import CategoryList from "./CategoryList";
import Menulist from "./Menulist";

function Routess() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/category" element={<Category />}>
          <Route index element={<CategoryList />} />
          <Route path="menu" element={<Menulist />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routess;
