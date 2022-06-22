import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUsername = () => {
  const [username, setUsername] = useState("");
  const [isActive, setActive] = useState(false);
  let history = useNavigate();

  const onSubmit = () => {
    if (username) {
      history("/student");
    } else if (!username) {
      setActive(true);
    }
  };

  const onTeacherSubmit = () => {
    if (username) {
      history("/teacherwelcome");
    } else if (!username) {
      setActive(true);
    }
  };

  localStorage.setItem("name", JSON.stringify(username));

  return { username, setUsername, onSubmit, isActive, onTeacherSubmit };
};

export default useUsername;
