import "../../global.css";
import { useState } from "react";

import Header from "../../components/Header/Header";

function Error() {
  const [eyeKiller, setEyeKiller] = useState(false);

  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = !eyeKiller ? "#0d1117" : "#c8d9ed";
  const handleModeChange = () => {
    setEyeKiller(!eyeKiller);
    body.style.backgroundColor = eyeKiller ? "#0d1117" : "#c8d9ed";
  };

  return (
    <div>
      <div className={eyeKiller ? "pain-mode-bg" : "dark-mode-bg"} />
      <div className={eyeKiller ? "pain-mode" : "dark-mode"}>
        <div className="container">
          <Header handleModeChange={handleModeChange} setMode={eyeKiller} />
          <div className="about">
            <h2>Deze pagina werd niet gevonden.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
