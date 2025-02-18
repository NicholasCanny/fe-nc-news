import { Link } from "react-router-dom";
import FormatDate from "./FormatDate";

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
    <section className="article-card">
      <img
        src={article_img_url}
        alt={`image of ${article_img_url}`}
        className="article-img"
      />
      <p>
        <strong>{title}</strong>
      </p>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <p>
        Published on: <FormatDate date={created_at} />
      </p>

      <Link to={`/articles/${article_id}`}>
        <button className="button">Go to article</button>
      </Link>
    </section>
  );
}

export default ArticleCard;
