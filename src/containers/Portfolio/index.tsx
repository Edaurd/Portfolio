import "../../global.css";
import { useState } from "react";

import Header from "../../components/Header/Header";
import Opdrachten from "../../components/Portfolio/Portfolio";

function Portfolio() {
  const [eyeKiller, setEyeKiller] = useState(
    (window as any).Theme ? false : true
  );

  const handleModeChange = () => {
    const body = document.getElementsByTagName("body")[0];
    setEyeKiller(!eyeKiller);
    body.style.backgroundColor = (window as any).Theme ? "#0d1117" : "#c8d9ed";
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
