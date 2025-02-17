function ArticleCard({
  title,
  topic,
  author,
  created_at,
  votes,
  article_img_url,
}) {
  return (
    <div className="article-card">
      <img
        src={article_img_url}
        alt={`image of ${article_img_url}`}
        className="article-img"
      ></img>
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
      {/* <p>Votes: {votes}</p> */}
    </div>
  );
}

export default ArticleCard;
