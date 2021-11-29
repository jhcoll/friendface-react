import { useState } from "react";
import NewPostPage from "../../pages/NewPost";
import classes from "./MainNavigation.module.css";
import Post from "../UI/Post";
import Backdrop from "../UI/Backdrop";
import ErrorModal from "../UI/ErrorModal";

function MainNavigation({ setRefreshPost }) {
  const [showForm, setShowForm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");
  function addForm() {
    setShowForm(true);
  }
  function cancelForm() {
    setShowForm(false);
  }

  function errorHandler() {
    setShowError(!showError);
  }
  return (
    <div>
      <header className={classes.header}>
        <div>
          <h1 className={classes.title}>FriendFace</h1>
        </div>
        <nav>
          <ul>
            <li>
              <label onClick={addForm}>New Post</label>
            </li>
          </ul>
        </nav>
      </header>
      {showForm ? (
        <>
          <div className={classes.NewPostPage}>
            <Post>
              <NewPostPage
                onCancel={cancelForm}
                setRefreshPost={setRefreshPost}
                setErrorText={setErrorText}
                setShowError={setShowError}
              />
            </Post>
          </div>
          <Backdrop onClick={cancelForm} />
        </>
      ) : (
        ""
      )}
      {showError ? (
        <>
          <ErrorModal onClick={errorHandler} text={errorText}/>
          <Backdrop onClick={errorHandler} zIndex={14}/>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainNavigation;
