import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    image: "/Images/VIP1.jpg",
    section: "VIP",
    url: "vip-auth",
  },
  {
    image: "/Images/Regular.jpg",
    section: "Regular",
    url: "regular-menu",
  },
];
function CategoryList() {
  return (
    <div className="flex flex-col justify-between items-center gap-10  ">
      <h1 className="text-[#d57c2c] text-2xl text-center ">
        Please select your category
      </h1>
      <div className="flex flex-wrap justify-around gap-8  ">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
