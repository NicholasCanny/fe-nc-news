import FormatDate from "./FormatDate";
import { UserContext } from "../UserContext";
import { useContext } from "react";

function CommentCard({ comment, deleteComment }) {
  const { author, body, comment_id, created_at, votes } = comment;

  const { loggedInUser } = useContext(UserContext);

  return (
    <section className="comment-card">
      <p className="comment-author">{author}</p>
      <p>{body}</p>
      <p>
        <strong>
          {votes} {votes === 1 ? "vote" : "votes"}
        </strong>
      </p>
      <p>
        <strong>Comment_id:</strong> {comment_id}
      </p>
      <p>
        <strong>Published on: </strong>
        <FormatDate date={created_at} />
      </p>
      {author === loggedInUser && (
        <button className="button" onClick={() => deleteComment(comment_id)}>
          Delete
        </button>
      )}
    </section>
  );
}

export default CommentCard;
