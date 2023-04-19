import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { InfographicsPage } from "./pages/InfographicsPage/InfographicsPage";
import { InfoPage } from "./pages/InfoPage";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/infographics" element={<InfographicsPage />}></Route>
          <Route path="/infographics/info" element={<InfoPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
