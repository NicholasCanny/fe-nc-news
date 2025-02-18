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
      <button>Add</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="jessjelly"
          required
        ></input>
        <br />
        <label htmlFor="body">Body</label>
        <input
          id="body"
          type="text"
          placeholder="This article is bodacious!"
        ></input>
        <br />
        <input value="Submit" id="submit" type="submit"></input>
      </form>
    </div>
  );
}

export default CommentForm;
