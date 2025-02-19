import FormatDate from "./FormatDate";

function CommentCard({ comment }) {
  const { author, body, comment_id, created_at, votes } = comment;

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
    </section>
  );
}

export default CommentCard;
