import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main"
import Header from "./components/Layout/Header"
import Login from "./pages/Login"
import Join from "./pages/Join"

function App() {
  return (
    <div className="mx-auto my-0">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
