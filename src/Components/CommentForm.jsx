import { postComment } from "../api";

function CommentForm({ article_id, handleNewComment }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: e.target.elements.username.value,
      body: e.target.elements.body.value,
    };

    postComment(article_id, formData).then((newComment) => {
      handleNewComment(newComment);
    });
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <strong>Username</strong>
        </label>
        <input
          id="username"
          type="text"
          placeholder="jessjelly"
          required
        ></input>
        <br />
        <label htmlFor="body">
          <strong>Body</strong>
        </label>
        <input
          id="body"
          type="text"
          placeholder="This article is bodacious!"
          required
        ></input>
        <br />
        <input
          className="button"
          value="Submit"
          id="submit"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default CommentForm;
