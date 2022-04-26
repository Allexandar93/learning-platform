import { Route, Routes } from "react-router";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Student from "./components/Student";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<Student />} />
    </Routes>
  );
}

export default App;
