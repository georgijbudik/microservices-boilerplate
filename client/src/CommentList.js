const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments?.map((comment) => {
        let content;
        switch (comment.status) {
          case "pending":
            content = "This comment is awaiting moderation";
            break;
          case "approved":
            content = comment.content;
            break;
          case "rejected":
            content = "This comment has been rejected";
            break;
          default:
            content = "";
        }
        return <li key={comment.id}>{content}</li>;
      })}
    </ul>
  );
};

export default CommentList;
