import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../Components/Navbar";
import { fetchTopics, fetchArticles } from "../api";
import TopicSelector from "../Components/TopicSelector";
import SortOrderSelector from "../Components/SetOrderSelector";
import TopicArticleList from "../Components/TopicArticleList";
import TopicError from "../Components/TopicError";
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
    return <TopicError incorrectTopic={topic} />;
  }

  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <p className="header">View articles by topic</p>

        <TopicSelector topics={topics} currentTopic={topic} />
        <SortOrderSelector
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
        />

        {loadingArticles ? (
          <LoadingComponent input="articles" />
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <TopicArticleList topicArticles={topicArticles} />
        )}
      </main>
    </>
  );
}

export default TopicPage;
