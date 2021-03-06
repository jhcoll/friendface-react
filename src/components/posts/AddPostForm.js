import { useRef } from "react";
import Post from "../UI/Post";
import classes from "./AddPostForm.module.css";
import action from "./buttons/Button.module.css";

function AddPostForm({ onCancel, onAddPost, setErrorText, setShowError }) {
  const authorInputRef = useRef();
  const avatarInputRef = useRef();
  const contentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredDate = new Date().toISOString().slice(0, 10);
    const enteredAvatar = avatarInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    if (validation(enteredAuthor, enteredContent)) {
      authorInputRef.current.value = "";
      avatarInputRef.current.value = "#000000";
      contentInputRef.current.value = "";

      const postData = {
        author: enteredAuthor,
        avatar: enteredAvatar,
        date: enteredDate,
        content: enteredContent,
        likes: 0,
      };

      onAddPost(postData);
    } else {
    }
  }

  function validation(Author, Content) {
    const inputRegex = /(^[A-z0-9À-ž.,'!?&$%()\s]+$)/;
    if (!inputRegex.test(Author)) {
      setErrorText("Invalid Author Entry");
      setShowError(true);
      return false;
    } else if (!inputRegex.test(Content)) {
      setErrorText("Invalid Content Entry");
      setShowError(true);
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className={classes.formPost}>
      <Post>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="author">Author: </label>
            <input type="text" required id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="avatarColour">Avatar Colour: </label>
            <input
              type="color"
              required
              id="avatarColour"
              ref={avatarInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="content">Content: </label>
            <textarea id="content" required rows="5" ref={contentInputRef} />
          </div>
          <div className={action.actions}>
            <div className={classes.options}>
              <button onClick={onCancel}>Cancel</button>
              <div className={classes.submit}>
                <button>Post</button>
              </div>
            </div>
          </div>
        </form>
      </Post>
    </div>
  );
}

export default AddPostForm;
