import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main"
import Header from "./components/Layout/Header"
import Login from "./pages/Login"
import Join from "./pages/Join"

function App() {

  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/sign-up'

  return (
    <div className="mx-auto my-0">
      {!hideHeader && <Header/>}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
