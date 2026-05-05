import { useState } from "react";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import CreatePost from "./components/CreatePost";
import PostItem from "./components/PostItem";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Chào mừng các bạn đến với Workshop ReactJS! 🎉" },
    { id: 2, text: "ReactJS thực sự rất thú vị và mạnh mẽ." },
  ]);

  const handleAddNewPost = (newText) => {
    const newPost = {
      id: Date.now(),
      text: newText,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app-container">
      {/* Thông tin cá nhân */}
      <div className="sidebar">
        <Info />
        <Contact />
        <Skills />
      </div>

      {/* Feed */}
      <div className="newsfeed">
        <PostItem content="Chào mừng các bạn đến với Workshop ReactJS! 🎉" />
        <CreatePost onAddNewPost={handleAddNewPost} />

        {/*In ra danh sách bài viết */}
        {posts.map((post) => (
          <PostItem key={post.id} content={post.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
