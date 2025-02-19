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
      <p>
        <strong>Topic:</strong> {topic}
      </p>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Published on:</strong> <FormatDate date={created_at} />
      </p>

      <Link to={`/articles/${article_id}`}>
        <button className="button">Go to article</button>
      </Link>
    </section>
  );
}

export default ArticleCard;
