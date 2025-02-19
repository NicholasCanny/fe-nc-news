import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import { UseProvider } from "./UserContext";
import ArticlePage from "./Pages/ArticlePage";
import TopicPage from "./Pages/TopicPage";

function App() {
  return (
    <Router>
      <div>
        <UseProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
            <Route path="/topics" element={<TopicPage />} />
            <Route path="/topics/:topic" element={<TopicPage />} />
          </Routes>
        </UseProvider>
      </div>
    </Router>
  );
}

export default App;
