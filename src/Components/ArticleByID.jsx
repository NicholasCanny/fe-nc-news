import { useEffect, useState } from "react";
import { fetchIndividualArticle, fetchComments, changeVote } from "../api";
import CommentCard from "./CommentCard";
import LoadingComponent from "./LoadingComponent";
import CommentForm from "./CommentForm";
import FormatDate from "./FormatDate";

function ArticleByID({ article_id }) {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  function handleVote(voteAdjustment) {
    changeVote(article_id, voteAdjustment)
      .then(() => {
        setArticle({
          ...article,
          votes: article.votes + voteAdjustment,
        });
        setError(null);
      })
      .catch((err) => {
        setError("Your vote was not successful");
      });
  }

  function handleNewComment() {
    fetchComments(article_id).then((updatedComments) => {
      setComments(updatedComments);
    });
  }

  if (loading) {
    return <LoadingComponent input="article" />;
  }

  return (
    <>
      <h1 className="header2">{article.title}</h1>
      <div className="image-container">
        <img src={article.article_img_url} alt={article.title} />
      </div>
      <p>
        <strong>
          {article.author} - {article.topic}
        </strong>
      </p>
      <p>{article.body}</p>
      <p>
        <strong>
          {" "}
          {article.votes} {article.votes === 1 ? "vote" : "votes"}
        </strong>
        <button
          className="likebutton"
          onClick={() => {
            handleVote(1);
          }}
        >
          👍
        </button>
        <button
          className="likebutton"
          onClick={() => {
            handleVote(-1);
          }}
        >
          👎
        </button>
      </p>
      {error && <p>{error}</p>}
      <p>
        <strong> Published on:</strong> <FormatDate date={article.created_at} />
      </p>
      <p>
        <strong>Article ID:</strong> {article.article_id}
      </p>
      <p className="header">
        <strong>Comments Section</strong>
      </p>
      <p>
        <strong>Post Comment</strong>
      </p>
      <CommentForm
        article_id={article.article_id}
        handleNewComment={handleNewComment}
      />
      <p>
        <strong>View Comments</strong>
      </p>
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
