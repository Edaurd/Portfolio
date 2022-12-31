import "../../global.css";
import { useState } from "react";

import Header from "../../components/Header/Header";
import { Intro } from "../../components/Intro/Intro";
import { Skills } from "../../components/Skills/Skills";
import { OnThisDay } from "../../components/OnThisDay/OnThisDay";

function Home() {
  const [eyeKiller, setEyeKiller] = useState(false);

  const handleModeChange = () => {
    const body = document.getElementsByTagName("body")[0];
    setEyeKiller(!eyeKiller);
    body.style.backgroundColor = eyeKiller ? "#0d1117" : "#c8d9ed";
  };

  return (
    <div className={eyeKiller ? "pain-mode" : "dark-mode"}>
      <div className="container">
        <Header handleModeChange={handleModeChange} setMode={eyeKiller} />
        <Intro />
        <Skills />
        <OnThisDay />
      </div>
    </div>
  );
}

export default Home;
