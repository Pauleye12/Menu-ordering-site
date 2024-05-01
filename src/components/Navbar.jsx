import React from "react";

import { animate, motion } from "framer-motion";

const left = {
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
      stiffness: 260,
      damping: 20,
    },
  },
};

const right = {
  initial: {
    x: -1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};
function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-screen flex justify-between items-center text-white px-4 py-3 ">
      <div>TESA'24</div>
      <div className="flex items-center gap-2">
        <p>YINYANG</p>
        <div className="w-[30px]">
          <img src="/Images/fullYinYang.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
