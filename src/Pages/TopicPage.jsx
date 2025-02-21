import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../Components/Navbar";
import { fetchTopics, fetchArticles } from "../api";
import ArticleCard from "../Components/ArticleCard";
import TopicErrorPage from "./TopicErrorPage";
import LoadingComponent from "../Components/LoadingComponent";
import Header from "../Components/Header";

function TopicPage() {
  const [topics, setTopics] = useState([]);
  const [topicArticles, setTopicArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("asc");
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [error, setError] = useState(null);

  const { topic } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ sort_by: sortBy, order: order });
  }, [sortBy, order]);

  useEffect(() => {
    if (topic) {
      setLoadingArticles(true);
      setError(null);

      fetchArticles(sortBy, order, topic)
        .then((articles) => {
          setTopicArticles(articles);
          setLoadingArticles(false);
        })
        .catch(() => {
          setError("Articles not found");
          setLoadingArticles(false);
        });
    }
  }, [sortBy, order, topic]);

  useEffect(() => {
    fetchTopics()
      .then(setTopics)
      .catch(() => setError("Failed to load topics"));
  }, []);

  let allTopics = topics.map((t) => t.slug);

  if (topics.length > 0 && topic && !allTopics.includes(topic)) {
    return <TopicErrorPage incorrectTopic={topic} />;
  }

  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <p className="header">View articles by topic</p>

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
            {topics.length === 0 ? (
              <option disabled>{"Loading topics..."}</option>
            ) : (
              topics.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.slug}
                </option>
              ))
            )}
          </select>
        </form>

        <form>
          <label htmlFor="sortby">Sort by: </label>
          <select
            name="sortby"
            id="sortby"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            required
          >
            <option value="created_at">Date</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
            <option value="title">Title</option>
          </select>
        </form>

        <form>
          <label htmlFor="order">Order: </label>
          <select
            name="order"
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            required
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </form>

        {loadingArticles ? (
          <LoadingComponent input="articles" />
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <section className="grid-container">
            {topicArticles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </section>
        )}
      </main>
    </>
  );
}

export default TopicPage;
