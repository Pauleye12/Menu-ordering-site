import React from "react";
import Menucard from "./Menucard";
import { motion } from "framer-motion";

const Dishes = [
  {
    image: "/Images/rice.jpg",
    name: "Jollof rice, Plantain and moinmoin",
  },
  {
    image: "/Images/poundedYam.jpg",
    name: "Pounded Yam and Egusi",
  },
];

const load = {
  initial: {
    x: 1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      ease: "easeIn",
      when: "beforeChildren",
    },
  },
};
function Menulist() {
  return (
    <motion.div
      variants={load}
      initial="initial"
      animate="animate"
      className="flex flex-col justify-between items-center gap-10 max-h-[72%] h-full "
    >
      <h1 className="text-[#d57c2c] text-2xl text-center ">
        Please select your Meal
      </h1>
      <div className="flex flex-wrap justify-around gap-8 overflow-auto ">
        {Dishes.map((dish, index) => (
          <Menucard key={index} dish={dish} />
        ))}
      </div>
    </motion.div>
  );
}

export default Menulist;
