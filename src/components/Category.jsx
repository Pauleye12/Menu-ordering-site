import React from "react";

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Category() {
  return (
    <div className="section px-4  py-3 h-screen grid place-items-center ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Category;
