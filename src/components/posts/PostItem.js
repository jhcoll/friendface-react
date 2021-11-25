import { useState } from "react/cjs/react.development";
import Post from "../UI/Post";
import Backdrop from "../UI/Backdrop";
import DeleteButton from "./buttons/DeleteButton";
import EditModal from "./buttons/EditModal";
import LikeButton from "./buttons/LikeButton";
import classes from "./PostItem.module.css";

function PostItem({ likes, content, avatar, id, author, date }) {
  const [showEdit, setShowEdit] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [contentText, setContentText] = useState(content);
  const [postDelete, setPostDelete] = useState(true);

  function editHandler() {
    if (showEdit) {
      setShowEdit(false);
    } else {
      setShowEdit(true);
    }
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
                <LikeButton
                  id={id}
                  setLikeCount={setLikeCount}
                  likeCount={likeCount}
                />
              </div>
              <button onClick={editHandler}>edit</button>
              <DeleteButton id={id} setPostDelete={setPostDelete} />
            </div>
          </Post>
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
