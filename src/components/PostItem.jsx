import { useState } from "react";

export default function PostItem(props) {
  // Sử dụng hook useState để lưu trữ số lượt like của bài viết[cite: 1]
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=50&q=80"
          alt="Avatar"
        />
        <h4>Đặng Lam Sơn</h4>
      </div>
      <p className="post-content">{props.content}</p>

      <div className="post-actions">
        <button onClick={handleLike} className={likes > 0 ? "liked" : ""}>
          👍 Thích {likes > 0 && `(${likes})`}
        </button>
        <button>💬 Bình luận</button>
      </div>
    </div>
  );
}
