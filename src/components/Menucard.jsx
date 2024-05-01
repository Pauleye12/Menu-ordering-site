import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Menucard({ dish }) {
  const [showOrder, setShowOrder] = useState(false);
  const [tableDets, setTableDets] = useState({
    tableNum: "",
    Order: "",
  });
  const navigate = useNavigate();

  //   const [tableNum, setTableNum] = useState("");
  const toggleSetOrder = (food) => {
    setTableDets((prev) => ({
      ...prev,
      Order: food,
    }));
    setShowOrder(!showOrder);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted");
    console.log(tableDets);
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-3 pb-2 rounded-md  bg-[#e5720e] max-w-[300px]">
      <div
        onClick={() => toggleSetOrder(dish.name)}
        className="flex flex-col rounded-md bg-[#e5720e] text-black max-w-[300px]   "
      >
        <img
          className="w-full aspect-video rounded-md"
          src={dish.image}
          alt=""
        />
        <h1 className="text-xl border-t-4 border-white px-2 py-1">
          {dish.name}
        </h1>
      </div>
      {showOrder && (
        <div className="bg-white px-2 mx-1  rounded-md py-3 ">
          <form className="flex flex-col gap-4 w-full" action="" method="post">
            <div className="flex flex-col w-full gap-2 items-start">
              <label htmlFor="tableNum">Please enter your table number</label>
              <input
                onChange={(e) => {
                  setTableDets((prev) => ({
                    ...prev,
                    tableNum: e.target.value,
                  }));
                }}
                className=" px-3 py-1 w-full outline-none border border-[#e5720e] rounded-lg active:border-2  "
                type="number"
                name="tableNum"
                id="tableNum"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center gap-1 px-2 py-2 bg-[#e5720e] rounded-md "
            >
              Place Order{" "}
              <img className="w-[30px]" src="/Images/fullYinYang.png" alt="" />{" "}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Menucard;
