import Post from "../UI/Post";
import classes from "./PostItem.module.css";

function PostItem(props) {
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
        <div className={classes.actions}>
          <div className={classes.like}>
            <button>like</button>
          </div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </Post>
    </li>
  );
}

export default PostItem;
