import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ThankYou from "./ThankYou";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA96zo1AnT_nullBclQvHZHtOD0Kf0wrO0",
  authDomain: "yinyangmenu-2024.firebaseapp.com",
  projectId: "yinyangmenu-2024",
  storageBucket: "yinyangmenu-2024.appspot.com",
  messagingSenderId: "670137131222",
  appId: "1:670137131222:web:63613c1b8c5d559fad6977",
  measurementId: "G-C2JWQ8XD0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function Menucard({ dish }) {
  const [showOrder, setShowOrder] = useState(false);
  const [tableDets, setTableDets] = useState({
    tableNum: "",
    Order: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //   const [tableNum, setTableNum] = useState("");
  const toggleSetOrder = (food) => {
    setTableDets((prev) => ({
      ...prev,
      Order: food,
    }));
    setShowOrder(!showOrder);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tableDets.tableNum === "") {
      alert("Please enter table number");
    } else {
      setShowLoader(true);
      setShowThankYou(false);

      try {
        // Call API to get trending movies
        const docRef = await addDoc(collection(db, "orders"), tableDets);

        setShowThankYou(true);
      } catch (err) {
        // Handle error
        setError(err);
      } finally {
        // Hide loading indicator
        setShowLoader(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 pb-2 rounded-md  bg-[#e5720e] max-w-[300px] w-full ">
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
                required={true}
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
      {showLoader && <Loader />}
      {showThankYou && <ThankYou info={dish.name} />}
    </div>
  );
}

export default Menucard;
