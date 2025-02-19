import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../Components/Navbar";
import { fetchTopics, fetchArticlesWithTopic } from "../api";
import ArticleCard from "../Components/ArticleCard";

function TopicPage() {
  const [topics, setTopics] = useState([]);
  const [topicArticles, setTopicArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("asc");

  const { topic } = useParams();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ sort_by: sortBy, order: order });
  }, [sortBy, order]);

  useEffect(() => {
    if (topic) {
      fetchArticlesWithTopic(sortBy, order, topic).then(setTopicArticles);
    } else {
      setTopicArticles([]);
    }
  }, [sortBy, order, topic]);

  useEffect(() => {
    fetchTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

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
            {topics.length > 0 ? (
              topics.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.slug}
                </option>
              ))
            ) : (
              <option disabled>Loading topics...</option>
            )}
          </select>
        </form>

        <form>
          <label htmlFor="sortby">Sort by: </label>
          <select
            name="sortby"
            id="sortby"
            value={sortBy || "default"}
            onChange={(e) => setSortBy(e.target.value)}
            required
          >
            <option value="default" disabled>
              Select
            </option>
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
            value={order || "default"}
            onChange={(e) => setOrder(e.target.value)}
            required
          >
            <option value="default" disabled>
              Select
            </option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
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
