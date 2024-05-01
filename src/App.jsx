import { useState } from "react";
import { animate, motion } from "framer-motion";
import Welcome from "./components/Welcome";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Routess from "./components/Routess";

function App() {
  return (
    <Router>
      <Routess />
    </Router>
  );
}

export default App;
