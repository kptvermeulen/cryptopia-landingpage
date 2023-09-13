import React from "react";
import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "views/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="*" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
