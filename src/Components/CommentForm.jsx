import { postComment } from "../api";
import { UserContext } from "../UserContext";
import { useContext, useState } from "react";

function CommentForm({ article_id, handleNewComment }) {
  const { loggedInUser } = useContext(UserContext);

  const [commentBody, setCommentBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCommentBody(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!commentBody || loading) {
      return;
    } else {
      setLoading(true);

      const formData = {
        username: loggedInUser,
        body: commentBody,
      };

      postComment(article_id, formData)
        .then((newComment) => {
          handleNewComment(newComment);
          setCommentBody("");
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to post comment.");
          setLoading(false);
        });
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <strong>Username: {loggedInUser}</strong>
        </label>
        <br />
        <label htmlFor="body">
          <strong>Body</strong>
        </label>
        <input
          id="body"
          type="text"
          placeholder="This article is bodacious!"
          value={commentBody}
          onChange={handleInputChange}
          required
        />
        <br />
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Posting" : "Submit"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CommentForm;
