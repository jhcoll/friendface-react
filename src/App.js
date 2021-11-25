import FeedPage from "./pages/Feed.js";
// import NewPostPage from "./pages/NewPost.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        {/* <Route path="/addpost" element={<NewPostPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

// import Todo from "./components/Todo.js";

//    <h1>My Todos</h1>
//   <Todo text='Learn react'/>
//   <Todo text='Beat Conran at chess'/>
//   <Todo text="Make sure Conran knows he's bad at chess"/>
