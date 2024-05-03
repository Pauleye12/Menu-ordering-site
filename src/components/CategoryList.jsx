import React from "react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

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
function CategoryList() {
  return (
    <motion.div
      variants={load}
      initial="initial"
      animate="animate"
      className="flex flex-col justify-between items-center gap-10  "
    >
      <h1 className="text-[#d57c2c] text-2xl text-center ">
        Please select your category
      </h1>
      <div className="flex flex-wrap justify-around gap-8  ">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </motion.div>
  );
}

export default CategoryList;
