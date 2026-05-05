import { useState } from "react";

export default function CreatePost(props) {
  const [text, setText] = useState("");

  const handlePost = () => {
    props.onAddNewPost(text);

    setText("");
  };

  return (
    <div className="create-post-card">
      <div className="input-group">
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=50&q=80"
          alt="Avatar"
        />
        <input
          type="text"
          placeholder="Bạn đang nghĩ gì?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        className="btn-post"
        onClick={handlePost}
        disabled={text.trim() === ""}
      >
        Đăng bài
      </button>
    </div>
  );
}
