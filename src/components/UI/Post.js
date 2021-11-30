import classes from "./Post.module.css";

function Post({ children }) {
  return <div className={classes.card}>{children}</div>;
}

export default Post;
