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

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(username));
  }, [username]);

  return { username, setUsername, onSubmit, isActive };
};

export default useUsername;
