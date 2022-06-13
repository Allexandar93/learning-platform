import React from "react";
import Facts from "./Facts";
import Navbar from "./Navbar";
import Profile from "./Profile";
import "../styles/navbar.scss";

import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Quiz from "./Quiz";
import QuizTest from "./QuizTest";

const Student = () => {
  return (
    <div className="student">
      <Navbar />

      <Routes>
        <Route path="/" element={<Facts />} />
        <Route path="/quiz" element={<Quiz />}>
          <Route path="/quiz/test" element={<QuizTest />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Student;
