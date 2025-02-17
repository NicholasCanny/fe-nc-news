import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import { UseProvider } from "./UserContext";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
