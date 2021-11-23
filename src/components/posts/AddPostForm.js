import { useRef } from "react";
import classes from "./AddPostForm.module.css";

function AddPostForm(props) {
  const authorInputRef = useRef();
  // const dateInputRef = useRef();
  const avatarInputRef = useRef();
  const contentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    // const enteredDate = dateInputRef.current.value;
    const enteredDate = new Date().toISOString().slice(0, 10);
    const enteredAvatar = avatarInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    authorInputRef.current.value = "";
    // dateInputRef.current.value = "";
    avatarInputRef.current.value = "#000000";
    contentInputRef.current.value = "";

    const postData = {
      author: enteredAuthor,
      avatar: enteredAvatar,
      date: enteredDate,
      content: enteredContent,
      likes: 0
    };

    props.onAddPost(postData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="author">Author: </label>
        <input type="text" required id="author" ref={authorInputRef} />
      </div>
      {/* <div className={classes.control}>
        <label htmlFor="date">Date: </label>
        <input type="date" required id="date" ref={dateInputRef} />
      </div> */}
      <div className={classes.control}>
        <label htmlFor="avatarColour">Avatar Colour: </label>
        <input type="color" required id="avatarColour" ref={avatarInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="content">Content: </label>
        <textarea id="content" required rows="5" ref={contentInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Post</button>
      </div>
    </form>
  );
}

export default AddPostForm;
