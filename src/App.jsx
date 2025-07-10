import "./App.css";
import Cv from "./components/cv";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Cv />} />
        {/* <Route path="/cv" element={<Cv />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
