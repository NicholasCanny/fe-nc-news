import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  const {
    article_id,
    title,
    topic,
    author,
    created_at,
    votes,
    article_img_url,
  } = article;

  return (
    <div className="article-card">
      <img
        src={article_img_url}
        alt={`image of ${article_img_url}`}
        className="article-img"
      />
      <p>Title: {title}</p>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <p>
        Date:{" "}
        {new Date(created_at).toLocaleString([], {
          dateStyle: "short",
          timeStyle: "short",
        })}
      </p>
      <Link to={`/articles/${article_id}`}>
        <button className="button">Go to article</button>
      </Link>
    </div>
  );
}

export default ArticleCard;
