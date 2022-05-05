import React, { useState } from "react";
import axios from "axios";
import "../styles/facts.scss";

const Facts = () => {
  const [fact, setFact] = useState("");

  const getFact = async () => {
    const urlAPI = "https://api.chucknorris.io/jokes/random";
    axios
      .request(urlAPI)
      .then((response) => setFact(response.data.value))
      .catch((error) => console.log(error));
  };

  return (
    <div className="facts">
      <h1>{fact}</h1>
      <button onClick={getFact}>Click</button>
    </div>
  );
};

export default Facts;
