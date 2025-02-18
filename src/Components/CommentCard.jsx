import FormatDate from "./FormatDate";

function CommentCard({ comment }) {
  const { author, body, comment_id, created_at, votes } = comment;

  return (
    <section className="comment-card">
      <p className="comment-author">{author}:</p>
      <p>{body}</p>
      <p>
        {votes} {votes < 2 ? "vote" : "votes"}
      </p>
      <p>Comment_id: {comment_id}</p>
      <p>
        Published on: <FormatDate date={created_at} />
      </p>
    </section>
  );
}

export default CommentCard;
