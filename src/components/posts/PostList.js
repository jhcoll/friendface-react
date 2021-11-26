import PostItem from "./PostItem";
import classes from "./PostList.module.css";
import OrderPosts from "./OrderPosts.js";
import { useState } from "react";

function PostList({ posts }) {
  const [orderUpDown, setOrderUpDown] = useState(true);
  const [authorDate, setAuthorDate] = useState(true);

  if (authorDate) {
    orderByDate();
    if (!orderUpDown) {
      posts.reverse();
    }
  } else {
    orderByName();
    if (orderUpDown) {
      posts.reverse();
    }
  }

  function orderByDate() {
    posts.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  }

  function orderByName() {
    posts.sort(function (a, b) {
      return a.author.localeCompare(b.author);
    });
  }

  return (
    <>
      <OrderPosts
        orderUpDown={orderUpDown}
        setOrderUpDown={setOrderUpDown}
        authorDate={authorDate}
        setAuthorDate={setAuthorDate}
      />
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
