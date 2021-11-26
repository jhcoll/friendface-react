import { useState } from "react/cjs/react.development";
import Post from "../UI/Post";
import Backdrop from "../UI/Backdrop";
import EditModal from "./buttons/EditModal";
import classes from "./PostItem.module.css";
import ButtonAction from "./buttons/ButtonAction";
import { DeletePost, LikeHandler } from "./buttons/LikeDeleteFunctions";

function PostItem({ likes, content, avatar, id, author, date }) {
  const [showEdit, setShowEdit] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [contentText, setContentText] = useState(content);
  const [postDelete, setPostDelete] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  function editHandler() {
    setShowEdit(!showEdit);
  }

  function deleteHandler() {
    setShowDeleteAlert(!showDeleteAlert);
  }

  return (
    <>
      {postDelete ? (
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
            <div className={classes.likeCount}>{likeCount}</div>
            <div className={classes.actions}>
              <div className={classes.like}>
                <ButtonAction
                  buttonTitle="like"
                  id={id}
                  buttonFunction={LikeHandler}
                  setLikeCount={setLikeCount}
                  likeCount={likeCount}
                />
              </div>
              <button onClick={editHandler}>edit</button>
              <button onClick={deleteHandler}>delete</button>
            </div>
          </Post>
          {showDeleteAlert && (
            <>
              <Post>
                <div className={classes.modal}>
                  Are you sure you want to Delete?
                  <div className={classes.actions}>
                    <button onClick={deleteHandler}>cancel</button>
                    <ButtonAction
                      buttonTitle="delete"
                      id={id}
                      buttonFunction={DeletePost}
                      setPostDelete={setPostDelete}
                      setShowDeleteAlert={setShowDeleteAlert}
                    />
                  </div>
                </div>
              </Post>
              <Backdrop onClick={deleteHandler} />
            </>
          )}
          {showEdit && (
            <EditModal
              onClick={editHandler}
              id={id}
              setContentText={setContentText}
              contentText={contentText}
            />
          )}
          {showEdit && <Backdrop onClick={editHandler} />}
        </li>
      ) : (
        ""
      )}
    </>
  );
}

export default PostItem;
