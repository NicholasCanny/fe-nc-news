import { useEffect, useState } from "react";
import { fetchIndividualArticle } from "../api";
import { fetchComments } from "../api";
import CommentCard from "./CommentCard";
import LoadingComponent from "./LoadingComponent";

function ArticleByID({ article_id }) {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIndividualArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  if (loading) {
    return <LoadingComponent input="article" />;
  }

  return (
    <>
      <h1 className="header2">{article.title}</h1>
      <div className="image-container">
        <img src={article.article_img_url} alt={article.title} />
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
      <p className="header">Comments</p>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      ) : (
        <p>No comments available for this article.</p>
      )}
    </>
  );
}

export default ArticleByID;
