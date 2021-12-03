import PostItem from "./PostItem";
import classes from "./PostList.module.css";

function PostList({ posts, errorText, setErrorText, idToken, userId }) {
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
            errorText={errorText}
            setErrorText={setErrorText}
            idToken={idToken}
            userId={userId}
          />
        ))}
      </ul>
    </>
  );
}

export default PostList;
