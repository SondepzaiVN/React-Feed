import Info from "./components/Info";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import NewsFeed from "./components/NewsFeed";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Thông tin cá nhân */}
      <div className="profile">
        <Info />
        <Contact />
        <Skills />
      </div>

      {/* Feed */}
      <NewsFeed />
    </div>
  );
}

export default App;
