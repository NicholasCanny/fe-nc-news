import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((ArticlesFromApi) => {
      console.log(ArticlesFromApi);

      setArticles(ArticlesFromApi);
    });
  }, []);

  return (
    <div className="grid-container">
      {articles.map((article) => (
        <ArticleCard
          key={article.article_id}
          title={article.title}
          topic={article.topic}
          author={article.author}
          created_at={article.created_at}
          votes={article.votes}
          article_img_url={article.article_img_url}
        />
      ))}
    </div>
  );
}

export default ArticleList;
