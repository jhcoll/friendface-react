import FeedPage from "./pages/Feed.js";
import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  const [refreshPost, setRefreshPost] = useState(false);
  return (
    <>
      <MainNavigation setRefreshPost={setRefreshPost} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <FeedPage
                refreshPost={refreshPost}
                setRefreshPost={setRefreshPost}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
