import PostItem from "./PostItem";
import classes from "./PostList.module.css";

function PostList({ posts }) {
  return (
    <>
      <ul className={classes.list}>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            avatar={post.avatar}
            author={post.author}
            date={post.date}
            content={post.content}
            likes={post.likes}
          />
        ))}
      </ul>
    </>
  );
}

export default PostList;
