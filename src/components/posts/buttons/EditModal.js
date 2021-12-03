import { useRef } from "react";
import Post from "../../UI/Post";
import classes from "./EditModal.module.css";
import action from "./Button.module.css";

function EditModal({
  onClick,
  id,
  setContentText,
  contentText,
  idToken,
  setErrorText,
}) {
  const contentEditRef = useRef();
  function editPost() {
    const data = { content: contentEditRef.current.value };
    fetch(
      `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts/${id}.json?auth=${idToken}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        setContentText(contentEditRef.current.value);
        onClick();
      } else {
        setErrorText("Unauthorised Access");
      }
    });
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
        <div className={action.actions}>
          <button onClick={onClick}>cancel</button>
          <button onClick={editPost}>submit</button>
        </div>
      </div>
    </Post>
  );
}

export default EditModal;
