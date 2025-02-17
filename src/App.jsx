import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import { UseProvider } from "./UserContext";
import ArticlePage from "./Pages/ArticlePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articleID" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
