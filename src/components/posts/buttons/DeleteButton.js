import { useState } from "react/cjs/react.development";
import Backdrop from "../../UI/Backdrop";
import Post from "../../UI/Post";
import classes from "./EditModal.module.css";

function DeleteButton({ id, setPostDelete }) {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  function deletePost() {
    fetch(
      `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts/${id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setShowDeleteAlert(false);
      setPostDelete(false);
    });
  }
  function deleteAlert() {
    if (showDeleteAlert) {
      setShowDeleteAlert(false);
    } else {
      setShowDeleteAlert(true);
    }
  }

  return (
    <>
      <button onClick={deleteAlert}>delete</button>
      {showDeleteAlert && (
        <Post>
          <div className={classes.modal}>
            Are you sure you want to Delete?
            <div className={classes.actions}>
              <button onClick={deleteAlert}>cancel</button>
              <button onClick={deletePost}>delete</button>
            </div>
          </div>
        </Post>
      )}
      {showDeleteAlert && <Backdrop onClick={deleteAlert} />}
    </>
  );
}

export default DeleteButton;
