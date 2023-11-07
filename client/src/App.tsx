import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import "./App.css";

import Main from "./pages/Main"
import Header from "./components/Layout/Header"
import Login from "./pages/Login"
import Join from "./pages/Join"
import Mypage from "./pages/Mypage";
import Write from "./pages/Write";
import ProfileEdit from "./pages/ProfileEdit";


function App() {

  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/sign-up'
  const email = useSelector((state: RootState ) => state.login.user.email)

  return (
    <div className="mx-auto">
      {!hideHeader && <Header/>}
      <div className="max-w-1200 mx-auto px-3 pt-14">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Join />} />
        <Route path="/" element={<Main />} />
        <Route path={`/${email}`} element={<Mypage />} />
        <Route path="/write-note" element={<Write />} />
        <Route path="/my-info/profile" element={<ProfileEdit />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
