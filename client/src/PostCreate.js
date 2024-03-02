import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control mb-3"
          onChange={handleInputChange}
          value={title}
        />
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
