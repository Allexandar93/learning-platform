import { Route, Routes } from "react-router";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Student from "./components/Student";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<Student />}>
        <Route path="/student/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
