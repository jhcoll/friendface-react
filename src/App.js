import FeedPage from "./pages/Feed.js";
import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import MainNavigation from "./components/layout/MainNavigation";
import LoginPage from "./pages/Login.js";

function App() {
  const [refreshPost, setRefreshPost] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [idToken, setIdToken] = useState("");
  const [userId, setUserId] = useState("");

  if (!idToken) {
    return (
      <LoginPage
        setShowError={setShowError}
        setErrorText={setErrorText}
        setIdToken={setIdToken}
        setUserId={setUserId}
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
        idToken={idToken}
        userId={userId}
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
                errorText={errorText}
                setErrorText={setErrorText}
                idToken={idToken}
                userId={userId}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
