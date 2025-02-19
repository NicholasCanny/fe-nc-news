import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";
import { fetchTopics } from "../api";
import { fetchArticlesWithTopic } from "../api";
import ArticleCard from "../Components/ArticleCard";

function TopicPage() {
  const [topics, setTopics] = useState([]);
  const [topicArticles, setTopicArticles] = useState([]);

  console.log(topicArticles);

  const [sortBy, setSortBy] = useState("created_at");

  const [order, setOrder] = useState("asc");

  const { topic } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  useEffect(() => {
    if (topic) {
      fetchArticlesWithTopic(sortBy, order, topic).then((articles) => {
        setTopicArticles(articles);
      });
    } else {
      setTopicArticles([]);
    }
  }, [sortBy, order, topic]);

  return (
    <>
      <header>
        <NavBar />
        <h1 className="header">WELCOME TO NC NEWS</h1>
      </header>
      <main>
        <p className="header">
          Here is a list of all available articles by topic
        </p>
        <form>
          <select
            name="topic"
            id="topic"
            value={topic || "default"}
            onChange={(e) => navigate(`/topics/${e.target.value}`)}
          >
            <option value="default" disabled>
              Select Topic
            </option>
            {topics.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.slug}
              </option>
            ))}
          </select>
        </form>
        <section className="grid-container">
          {topicArticles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </section>
      </main>
    </>
  );
}

export default TopicPage;
