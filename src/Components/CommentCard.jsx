function CommentCard({ comment }) {
  const { author, body, comment_id, created_at, votes } = comment;

  return (
    <section className="comment-card">
      <p className="comment-author">{author}:</p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Comment_id: {comment_id}</p>
      <p>
        Date:{" "}
        {new Date(created_at).toLocaleString([], {
          dateStyle: "short",
          timeStyle: "short",
        })}
      </p>
    </section>
  );
}

export default CommentCard;
