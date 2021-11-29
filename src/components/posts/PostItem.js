import { useState } from "react/cjs/react.development";
import Post from "../UI/Post";
import Backdrop from "../UI/Backdrop";
import DeleteButton from "./buttons/DeleteButton";
import EditModal from "./buttons/EditModal";
import LikeButton from "./buttons/LikeButton";
import classes from "./PostItem.module.css";

function PostItem(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likes);
  function editHandler() {
    if (showEdit) {
      setShowEdit(false);
    } else {
      setShowEdit(true);
    }
  }
  return (
    <li className={classes.item}>
      <Post>
        <div
          className={classes.image}
          style={{ backgroundColor: props.avatar }}
        >
          <img
            src="https://www.pngarts.com/files/3/Avatar-PNG-Pic.png"
            alt="AvatarPic"
          />
        </div>
        <div className={classes.content}>
          <div className={classes.top}>
            <h3>{props.author}</h3>
            <h4>{props.date}</h4>
          </div>
          <h5>{props.content}</h5>
        </div>
        <div className={classes.likeCount}>{likeCount}</div>
        <div className={classes.actions}>
          <div className={classes.like}>
            <LikeButton
              id={props.id}
              setLikeCount={setLikeCount}
              likeCount={likeCount}
            />
          </div>
          <button onClick={editHandler}>edit</button>
          <DeleteButton id={props.id} setRefreshPost={props.setRefreshPost} />
        </div>
      </Post>
      {showEdit && (
        <EditModal
          onClick={editHandler}
          content={props.content}
          id={props.id}
          setRefreshPost={props.setRefreshPost}
        />
      )}
      {showEdit && <Backdrop onClick={editHandler} />}
    </li>
  );
}

export default PostItem;
