import "../../global.css";
import { useState } from "react";

import Header from "../../components/Header/Header";
import { Intro } from "../../components/Intro/Intro";
import { Skills } from "../../components/Skills/Skills";
import { OnThisDay } from "../../components/OnThisDay/OnThisDay";

function Home() {
  const [eyeKiller, setEyeKiller] = useState(
    (window as any).Theme ? false : true
  );

  const handleModeChange = () => {
    const body = document.getElementsByTagName("body")[0];
    setEyeKiller(!eyeKiller);
    body.style.backgroundColor = (window as any).Theme ? "#0d1117" : "#c8d9ed";
  };

  return (
    <div>
      <div className={eyeKiller ? "pain-mode-bg" : "dark-mode-bg"} />
      <div className={eyeKiller ? "pain-mode" : "dark-mode"}>
        <div className="container">
          <Header handleModeChange={handleModeChange} setMode={eyeKiller} />
          <Intro />
          <Skills />
          <OnThisDay />
        </div>
      </div>
    </div>
  );
}

export default Home;
