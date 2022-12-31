import "../../global.css";
import { useState } from "react";

import Header from "../../components/Header/Header";
import ContactUs from "../../components/Contact/Contact";

function Contact() {
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
        <div className="about">
          <h2>Voor vragen/opmerkingen ben ik hier bereikbaar</h2>
        </div>
        <ContactUs />
      </div>
    </div>
  );
}

export default Contact;
