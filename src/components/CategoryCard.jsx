import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link to="menu">
      <div className="flex flex-col rounded-md bg-[#e5720e] text-black gap-1  ">
        <img
          className="max-w-[300px] aspect-video rounded-md"
          src={category.image}
          alt=""
        />
        <h1 className="text-2xl px-2 py-1">{category.section}</h1>
      </div>
    </Link>
  );
}

export default CategoryCard;
