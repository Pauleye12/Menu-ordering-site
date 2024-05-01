import React from "react";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";

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
function Welcome() {
  return (
    <div className="h-screen px-4 w-full grid place-items-center backdrop ">
      <div className="bg-[#33333364] grid place-items-center px-5 py-5 rounded-md">
        {" "}
        <div className="flex flex-col items-center text-white ">
          <h1>Hey There! Welcome to YINYANG</h1>
          <h1>
            Please Proceed to make your choice from the available food choice
            and place your order...
          </h1>
          <Link to="/category">
            <button className="bg-[#e5720e] mt-5 px-4 py-3 rounded-lg">
              Proceed to Order
            </button>
          </Link>
        </div>
        <div className="flex mt-4 items-center">
          <motion.div
            variants={left}
            initial="initial"
            animate="animate"
            className="w-[35px]"
          >
            <img src="/Images/whiteHalf1.png" alt="" />
          </motion.div>
          <motion.div variants={right} initial="initial" animate="animate">
            <img
              className="w-10 blackYang "
              src="/Images/blackHalf.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
