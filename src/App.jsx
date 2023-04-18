import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfographicsPage } from "./pages/InfographicsPage/InfographicsPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/infographics" element={<InfographicsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
