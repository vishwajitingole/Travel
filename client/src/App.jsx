import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Hotel from "./pages/Hotel/Hotel";
import "./App.css";

function App() {
  return (
    <div className="cursor-fancy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Hotel />} />
      </Routes>
    </div>
  );
}

export default App;
