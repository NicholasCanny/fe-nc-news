import ArticleCard from "../Components/ArticleCard";

function TopicArticleList({ topicArticles }) {
  return (
    <section className="grid-container" aria-labelledby="article-list">
      {topicArticles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </section>
  );
}

export default TopicArticleList;
