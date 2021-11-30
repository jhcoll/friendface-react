import { useRef } from "react";
import Post from "../../UI/Post";
import classes from "./EditModal.module.css";

function EditModal({ onClick, id, setContentText, contentText }) {
  const contentEditRef = useRef();
  function editPost() {
    const data = { content: contentEditRef.current.value };
    fetch(
      `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setContentText(contentEditRef.current.value);
    onClick();
  }

  return (
    <Post>
      <div className={classes.modal}>
        <div className={classes.editarea}>
          <textarea
            required
            rows="5"
            ref={contentEditRef}
            defaultValue={contentText}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={onClick}>cancel</button>
          <button onClick={editPost}>submit</button>
        </div>
      </div>
    </Post>
  );
}

export default EditModal;
