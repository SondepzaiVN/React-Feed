import { useState } from "react";
import PostItem from "./PostItem";

function NewsFeed() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Chào mừng các bạn đến với Workshop ReactJS! 🎉" },
    { id: 2, text: "ReactJS thực sự rất thú vị và mạnh mẽ." },
  ]);
  const [text, setText] = useState("");

  const handleAddNewPost = (newText) => {
    const newPost = {
      id: Date.now(),
      text: newText,
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const handlePost = () => {
    handleAddNewPost(text);
    setText("");
  };

  return (
    <div className="newsfeed">
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

      {/*In ra danh sách bài viết */}
      {posts.map((post) => (
        <PostItem key={post.id} content={post.text} />
      ))}
    </div>
  );
}

export default NewsFeed;
