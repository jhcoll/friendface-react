import { useRef } from "react";
import Post from "../../UI/Post";
import classes from "./EditModal.module.css";

function EditModal({ onClick, content, id, setRefreshPost }) {
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
    ).then(() => {
      setRefreshPost(true);
    });
  }

  return (
    <Post>
      <div className={classes.modal}>
        <div className={classes.editarea}>
          <textarea
            id="edit"
            required
            rows="5"
            ref={contentEditRef}
            defaultValue={content}
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
