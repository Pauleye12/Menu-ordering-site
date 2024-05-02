import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// const Loading_anime = {
//   first: {
//     x: [0, 30, 0],
//     transition: {
//       x: { repeat: Infinity, duration: 0.75 },
//     },
//   },
//   second: {
//     x: [0, -30, 0],
//     transition: {
//       x: { repeat: Infinity, duration: 0.75 },
//     },
//   },
// };

const left = {
  initial: {
    x: 1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 7,
      ease: "easeInOut",
      bounce: 0.65,
      type: "spring",
      //   x: { repeat: Infinity, duration: 0.75 },
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
      duration: 7,
      ease: "easeInOut",
      bounce: 0.65,
      type: "spring",
      //   x: { repeat: Infinity, duration: 0.75 },
    },
  },
};

const spinner = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      when: "afterChildren",
      duration: 1,
    },
  },
};

function Loader() {
  return (
    <motion.div className="w-screen bg-[#12121270] fixed top-0 left-0 h-screen flex flex-col items-center justify-center">
      <motion.div variants={spinner} animate="animate" className=" ">
        <motion.div
          //   variants={left}
          //   initial="initial"
          //   animate="animate"
          className="w-[26px] inline-block "
        >
          <img src="/Images/whiteHalf1.png" alt="" />
        </motion.div>
        <motion.div
          //   variants={right}
          //   initial="initial"
          //   animate="animate"
          className="w-[29px] blackYang2 inline-block "
        >
          <img className=" " src="/Images/blackHalf.png" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
