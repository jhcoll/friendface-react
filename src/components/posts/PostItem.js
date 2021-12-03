import { useState } from "react/cjs/react.development";
import Post from "../UI/Post";
import Backdrop from "../UI/Backdrop";
import EditModal from "./buttons/EditModal";
import classes from "./PostItem.module.css";
import action from "./buttons/Button.module.css";
import ButtonAction from "./buttons/ButtonAction";
import { DeletePost, LikeHandler } from "./buttons/LikeDeleteFunctions";

function PostItem({
  likes,
  content,
  avatar,
  id,
  author,
  date,
  errorText,
  setErrorText,
  idToken,
  userId,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [contentText, setContentText] = useState(content);
  const [postDelete, setPostDelete] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  function editHandler() {
    setShowEdit(!showEdit);
  }

  function deleteHandler() {
    setShowDeleteAlert(!showDeleteAlert);
  }

  fetch(
    `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts/${id}/userId.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setShowButtons(userId === data);
    });
  return (
    <>
      {postDelete && (
        <li className={classes.item}>
          <Post>
            <div className={classes.image} style={{ backgroundColor: avatar }}>
              <img
                src="https://www.pngarts.com/files/3/Avatar-PNG-Pic.png"
                alt="AvatarPic"
              />
            </div>
            <div className={classes.content}>
              <div className={classes.top}>
                <h3>{author}</h3>
                <h4>{date}</h4>
              </div>
              <h5>{contentText}</h5>
            </div>
            <div className={classes.buttons}>
              <div className={action.actions}>
                <div className={classes.like}>
                  <ButtonAction
                    buttonTitle="like"
                    buttonFunction={LikeHandler}
                    params={{
                      id: id,
                      setLikeCount: setLikeCount,
                      likeCount: likeCount,
                    }}
                  />
                  <div className={classes.likeCount}>{likeCount}</div>
                </div>
                {showButtons && (
                  <div className={classes.rightAction}>
                    <button onClick={editHandler}>edit</button>
                    <button onClick={deleteHandler}>delete</button>
                  </div>
                )}
              </div>
            </div>
          </Post>
          {showDeleteAlert && (
            <>
              <Post>
                <div className={classes.modal}>
                  Are you sure you want to Delete?
                  <div className={action.actions}>
                    <button onClick={deleteHandler}>cancel</button>
                    <ButtonAction
                      buttonTitle="delete"
                      buttonFunction={DeletePost}
                      params={{
                        id: id,
                        setPostDelete: setPostDelete,
                        setShowDeleteAlert: setShowDeleteAlert,
                      }}
                    />
                  </div>
                </div>
              </Post>
              <Backdrop onClick={deleteHandler} />
            </>
          )}
          {showEdit && (
            <>
              <EditModal
                onClick={editHandler}
                id={id}
                setContentText={setContentText}
                contentText={contentText}
                errorText={errorText}
                setErrorText={setErrorText}
                idToken={idToken}
                userId={userId}
              />
              <Backdrop onClick={editHandler} />
            </>
          )}
        </li>
      )}
    </>
  );
}

export default PostItem;
