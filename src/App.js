import FeedPage from "./pages/Feed.js";
import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import MainNavigation from "./components/layout/MainNavigation";
import LoginPage from "./pages/Login.js";

function App() {
  const [refreshPost, setRefreshPost] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [idToken, setIdToken] = useState();
  const [userIdToken, setUserIdToken] = useState();

  if (!idToken) {
    return (
      <LoginPage
        setShowError={setShowError}
        setErrorText={setErrorText}
        setIdToken={setIdToken}
      />
    );
  }

  return (
    <>
      <MainNavigation
        setRefreshPost={setRefreshPost}
        showError={showError}
        setShowError={setShowError}
        errorText={errorText}
        setErrorText={setErrorText}
      />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                setShowError={setShowError}
                setErrorText={setErrorText}
              />
            }
          />
          <Route
            path="/feed"
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
