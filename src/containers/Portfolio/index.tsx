import "../../global.css";
import { useState } from "react";

import Header from "../../components/Header/Header";
import Opdrachten from "../../components/Portfolio/Portfolio";

function Portfolio() {
  const [eyeKiller, setEyeKiller] = useState(false);

  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = !eyeKiller ? "#0d1117" : "#c8d9ed";
  const handleModeChange = () => {
    setEyeKiller(!eyeKiller);
    body.style.backgroundColor = eyeKiller ? "#0d1117" : "#c8d9ed";
  };

  return (
    <div className={eyeKiller ? "pain-mode" : "dark-mode"}>
      <div className="container">
        <Header handleModeChange={handleModeChange} setMode={eyeKiller} />
        <Opdrachten />
      </div>
    </div>
  );
}

export default Portfolio;
