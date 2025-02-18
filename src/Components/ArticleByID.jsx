import { useEffect, useState } from "react";
import { fetchIndividualArticle } from "../api";

function ArticleByID({ article_id }) {
  const [article, setIndividualArticles] = useState(null);

  useEffect(() => {
    fetchIndividualArticle(article_id).then((articleFromApi) => {
      setIndividualArticles(articleFromApi);
    });
  }, []);

  if (!article) return <p className="h1">Loading article...</p>;

  return (
    <>
      <div className="individual-article-card">
        <h1>{article.title}</h1>
        <div className="image-container">
          <img
            src={article.article_img_url}
            alt={article.title}
            className="image-container"
          />
        </div>
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>

        <p>
          Date:
          {new Date(article.created_at).toLocaleString([], {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </p>
        <p>Article ID: {article.article_id}</p>
      </div>
    </>
  );
}

export default ArticleByID;
