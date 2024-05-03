import { useState } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import Welcome from "./components/Welcome";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Routess from "./components/Routess";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routess />
      </AnimatePresence>
    </Router>
  );
}

export default App;
