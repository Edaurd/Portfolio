import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import Portfolio from "../containers/Portfolio/index";
import Voorbeeld from "../containers/Voorbeeld/index";
import Contact from "../containers/Contact/index";
import Error from "../containers/error/index";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/voorbeeld-:id" element={<Voorbeeld />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
