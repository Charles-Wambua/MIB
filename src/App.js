import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./page"; // Assuming "Page" is a default export from "page.js"
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<div>Services Page</div>} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
