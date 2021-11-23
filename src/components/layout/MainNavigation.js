import { Link } from "react-router-dom";
import { useState } from 'react';
import NewPostPage from "../../pages/NewPost";
import classes from "./MainNavigation.module.css";
import Post from "../UI/Post";

function MainNavigation() {
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
              <Link to="/">Feed</Link>
            </li>
            <li>
              <label onClick={addForm}>New Post</label>
              {/* <Link to="/addpost">New Post</Link> */}
            </li>
          </ul>
        </nav>
      </header>
      {showForm ?
      <div className={classes.NewPostPage}>
          <Post>
            <button className={classes.cancel} onClick={cancelForm}>cancel</button>
            <NewPostPage onClick={cancelForm}/>
          </Post>
      </div> :''}
    </div>
  );
}

export default MainNavigation;
