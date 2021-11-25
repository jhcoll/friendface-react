import Post from "../UI/Post";
import DeleteButton from "./buttons/DeleteButton";
import classes from "./PostItem.module.css";

function PostItem(props) {
  function likeHandler() {
    console.log(props.id);
  }
  function editHandler() {
    console.log(props.id);
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
        <div className={classes.actions}>
          <div className={classes.like}>
            
            <button onClick={likeHandler}>like</button>
          </div>
          <button onClick={editHandler}>edit</button>
          {/* <button onClick={deleteHandler}>delete</button> */}
          <DeleteButton id={props.id} setRefreshPost={props.setRefreshPost}/>
        </div>
      </Post>
    </li>
  );
}

export default PostItem;
