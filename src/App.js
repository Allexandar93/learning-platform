import { Route, Routes } from "react-router";
import { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Student from "./components/Student";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login username={username} />} />
      <Route path="/student" element={<Student />} />
    </Routes>
  );
}

export default App;
