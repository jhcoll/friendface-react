import PostItem from "./PostItem";
import classes from "./PostList.module.css"

function PostList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          avatar={post.avatar}
          author={post.author}
          date={post.date}
          content={post.content}
          setRefreshPost={props.setRefreshPost}
        />
      ))}
    </ul>
  );
}

export default PostList;
