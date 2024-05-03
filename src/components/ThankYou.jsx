import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const load = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      type: "spring",
      ease: "easeIn",
    },
  },
};
function ThankYou({ info }) {
  return (
    <div className="w-screen bg-[#12121270] fixed top-0 left-0 h-screen flex flex-col items-center justify-center">
      <motion.div
        variants={load}
        initial="initial"
        animate="animate"
        className="bg-white max-w-[350px] w-full max-h-[200px] h-full rounded-md px-3 py-2 "
      >
        <h1 className=" text-center text-[#e5720e] text-xl font-bold ">
          Order Confirmed
        </h1>
        <h1 className="text-center mt-3">
          Your order for {info} has been taken and is being processed{" "}
        </h1>
        <div className="flex w-full justify-center item-center">
          <Link to="/">
            <button className="bg-[#e5720e] mt-5 px-4 py-3 rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ThankYou;
