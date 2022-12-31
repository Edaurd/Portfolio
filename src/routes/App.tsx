import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import Portfolio from "../containers/Portfolio/index";
import Voorbeeld from "../containers/Voorbeeld/index";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/voorbeeld-:id" element={<Voorbeeld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
