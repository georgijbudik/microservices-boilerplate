import axios from "axios";
import { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const addComment = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={addComment}>
        <label className="form-label">New Comment</label>
        <input
          type="text"
          className="form-control mb-3"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <div>
          <button type="submit" className="btn btn-primary">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
