import { useState } from "react";
import NewPostPage from "../../pages/NewPost";
import classes from "./MainNavigation.module.css";
import Backdrop from "../UI/Backdrop";
import ErrorModal from "../UI/ErrorModal";

function MainNavigation({
  setRefreshPost,
  showError,
  setShowError,
  errorText,
  setErrorText,
}) {
  const [showForm, setShowForm] = useState(false);

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
          <NewPostPage
            onCancel={cancelForm}
            setRefreshPost={setRefreshPost}
            setErrorText={setErrorText}
            setShowError={setShowError}
          />
          <Backdrop onClick={cancelForm} />
        </>
      ) : (
        ""
      )}
      {showError ? (
        <>
          <ErrorModal onClick={errorHandler} text={errorText} />
          <Backdrop onClick={errorHandler} zIndex={14} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainNavigation;
