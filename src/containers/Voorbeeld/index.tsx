import "../../global.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Opdracht from "../../components/opdracht/opdracht";
import "./App.css";

const Voorbeeld = () => {
  const params = useParams();
  const [eyeKiller, setEyeKiller] = useState(
    (window as any).Theme ? false : true
  );

  const handleModeChange = () => {
    const body = document.getElementsByTagName("body")[0];
    setEyeKiller(!eyeKiller);
    body.style.backgroundColor = (window as any).Theme ? "#0d1117" : "#c8d9ed";
  };

  const handleClick = () => {
    window.history.back();
  };
  return (
    <div>
      <div className={eyeKiller ? "pain-mode-bg" : "dark-mode-bg"} />
      <div className={eyeKiller ? "pain-mode" : "dark-mode"}>
        <div className="container">
          <Header handleModeChange={handleModeChange} setMode={eyeKiller} />
          <button className="back-button" onClick={handleClick}>
            <span role="img" aria-label="back">
              🔙
            </span>{" "}
            Terug
          </button>
          <div className="opdracht">
            <Opdracht code={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voorbeeld;
