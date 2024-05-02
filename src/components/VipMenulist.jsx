import React from "react";
import Menucard from "./Menucard";

const Dishes = [
  {
    image: "/Images/rice.jpg",
    name: "Jollof rice, Plantain and moinmoin",
  },
  {
    image: "/Images/poundedYam.jpg",
    name: "Pounded Yam and Gbegiri",
  },
];
function Menulist() {
  return (
    <div className="flex flex-col justify-between items-center gap-10 max-h-[72%] h-full ">
      <h1 className="text-[#d57c2c] text-2xl text-center ">
        Please select your Meal
      </h1>
      <div className="flex flex-wrap justify-around gap-8 overflow-auto ">
        {Dishes.map((dish, index) => (
          <Menucard key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default Menulist;
