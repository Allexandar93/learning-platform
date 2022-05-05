import React from "react";
import Facts from "./Facts";
import Navbar from "./Navbar";
import Profile from "./Profile";
import "../styles/navbar.scss";

import { Route, Routes, Outlet } from "react-router-dom";

const Student = () => {
  return (
    <div className="student">
      <Navbar />

      <Routes>
        <Route path="/" element={<Facts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Student;
