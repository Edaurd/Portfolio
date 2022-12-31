import "../../global.css";
import { useState } from "react";

import Header from "../../components/Header/Header";
import ContactUs from "../../components/Contact/Contact";

function Contact() {
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
          <div className="about">
            <h2>Voor vragen/opmerkingen ben ik hier bereikbaar</h2>
          </div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Contact;
