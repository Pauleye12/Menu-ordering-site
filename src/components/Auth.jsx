import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

function Auth() {
  const navigate = useNavigate();
  const [accessCode, setAccessCode] = useState("");
  const [wrongCode, setWrongCode] = useState(false);

  const verifyCode = () => {
    if (accessCode === "BigSpender") {
      navigate("/category/vip-menu");
    } else {
      // alert("If you get money, You for sabi the code...");
      setWrongCode(true);
    }
  };
  return (
    <motion.div
      variants={load}
      initial="initial"
      animate="animate"
      className="w-screen bg-[#12121270] fixed top-0 left-0 h-screen flex flex-col items-center justify-center"
    >
      <div className="bg-white max-w-[350px] w-full max-h-[160px] h-full rounded-md px-3 py-2 flex justify-center items-center ">
        <form className="flex flex-col gap-4 w-full" action="" method="post">
          <div className="flex flex-col w-full gap-2 items-start">
            <label htmlFor="accessCode">Please enter your access code</label>
            <input
              onChange={(e) => {
                setAccessCode(e.target.value);
              }}
              className=" px-3 py-1 w-full outline-none border border-[#e5720e] rounded-lg active:border-2  "
              type="text"
              name="accessCode"
              id="accessCode"
              required={true}
            />
          </div>
          <button
            onClick={verifyCode}
            className="flex items-center justify-center gap-1 px-2 py-2 bg-[#e5720e] rounded-md "
          >
            Proceed
            <img
              className="w-[30px]"
              src="/Images/fullYinYang.png"
              alt=""
            />{" "}
          </button>
        </form>
      </div>

      {wrongCode && (
        <motion.div
          variants={load}
          initial="initial"
          animate="animate"
          className="w-screen bg-[#12121270] fixed top-0 left-0 h-screen flex flex-col items-center justify-center"
        >
          <div className="bg-white max-w-[350px] w-full max-h-[150px] h-full rounded-md px-3 py-2 ">
            <h1 className=" text-center text-[#e5720e] text-xl font-bold ">
              Invalid Access code
            </h1>
            <h1 className="text-center mt-3">
              If you get money, You for sabi the code...
            </h1>
            <div className="flex w-full justify-center item-center">
              <Link to="/category">
                <button className="bg-[#e5720e] mt-5 px-4 py-3 rounded-lg">
                  Back to Category
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Auth;
