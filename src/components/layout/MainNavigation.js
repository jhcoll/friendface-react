import { useState } from "react";
import NewPostPage from "../../pages/NewPost";
import classes from "./MainNavigation.module.css";
import Post from "../UI/Post";
import Backdrop from "../UI/Backdrop";

function MainNavigation(props) {
  const [showForm, setShowForm] = useState(false);
  function addForm() {
    setShowForm(true);
  }
  function cancelForm() {
    setShowForm(false);
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
                setRefreshPost={props.setRefreshPost}
              />
            </Post>
          </div>
          <Backdrop onClick={cancelForm} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainNavigation;
