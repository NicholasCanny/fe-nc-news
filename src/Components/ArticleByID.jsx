import { useEffect, useState } from "react";
import { fetchIndividualArticle, fetchComments, changeVote } from "../api";
import CommentCard from "./CommentCard";
import LoadingComponent from "./LoadingComponent";
import CommentForm from "./CommentForm";
import FormatDate from "./FormatDate";
import { removeComment } from "../api";

function ArticleByID({ article_id }) {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

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
        setArticle((prevArticle) => ({
          ...prevArticle,
          votes: prevArticle.votes + voteAdjustment,
        }));
        setError(null);
      })
      .catch(() => {
        setError("Your vote was not successful");
      });
  }

  function toggleUpVote() {
    if (!upVote) {
      handleVote(1);
      if (downVote) {
        setDownVote(false);
      }
      setUpVote(true);
    }
  }

  function toggleDownVote() {
    if (!downVote) {
      handleVote(-1);
      if (upVote) {
        setUpVote(false);
      }
      setDownVote(true);
    }
  }

  function handleNewComment() {
    fetchComments(article_id).then((updatedComments) => {
      setComments(updatedComments);
    });
  }

  function deleteComment(comment_id) {
    removeComment(comment_id)
      .then(() => fetchComments(article_id))
      .then((updatedComments) => {
        setComments(updatedComments);
      });
  }

  if (loading) {
    return <LoadingComponent input="article" />;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <h1 className="header2">{article.title}</h1>
      <div className="image-container">
        <img src={article.article_img_url} alt={article.title} />
      </div>
      <p className="header2">
        <strong>
          {article.author} - {article.topic}
        </strong>
      </p>
      <p>{article.body}</p>
      <p>
        <strong>
          {article.votes} {article.votes === 1 ? "vote" : "votes"}
        </strong>
        <button
          className={`likebutton ${upVote ? "active" : ""}`}
          onClick={toggleUpVote}
        >
          👍
        </button>
        <button
          className={`likebutton ${downVote ? "active" : ""}`}
          onClick={toggleDownVote}
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
        <strong>Post Comment</strong>
      </p>
      <CommentForm
        article_id={article.article_id}
        handleNewComment={handleNewComment}
      />
      <p className="header">
        <strong>View Comments</strong>
      </p>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))
      ) : (
        <p>No comments available for this article.</p>
      )}
    </>
  );
}

export default ArticleByID;
