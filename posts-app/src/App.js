import { Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Posts from "./components/Posts";
import { posts } from "./constants";
import { comments } from "./constants";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts posts={posts} />} />

        <Route
          path="comments/:postId"
          element={<Comments comments={comments} posts={posts} />}
        />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
