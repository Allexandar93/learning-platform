import { Route, Routes } from "react-router";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Student from "./components/Student";
import Profile from "./components/Profile";
import "./App.css";
import Quiz from "./components/Quiz";
import QuizTest from "./components/QuizTest";
import QuizResults from "./components/QuizResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<Student />}>
        <Route path="/student/quiz" element={<Quiz />}>
          <Route path="/student/quiz/test" element={<QuizTest />} />
          <Route path="/student/quiz/result" element={<QuizResults />} />
        </Route>
        <Route path="/student/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
