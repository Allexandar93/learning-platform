import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/facts.scss";

const Facts = () => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    getFact();
    const interval = setInterval(() => {
      getFact();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getFact = async () => {
    const urlAPI = "https://api.chucknorris.io/jokes/random";
    axios
      .request(urlAPI)
      .then((response) => setFact(response.data.value))
      .catch((error) => console.log(error));
  };

  return (
    <div className="facts">
      <div className="facts_container">
        <p className="facts_paragraph">Did you know?</p>
        <p className="facts_api">{fact}</p>
      </div>
    </div>
  );
};

export default Facts;
