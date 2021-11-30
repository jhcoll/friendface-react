import classes from "./OrderPosts.module.css";
import PostList from "./PostList";
import { useState } from "react";

function OrderPosts({ posts }) {
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
  function upDownHandler() {
    setOrderUpDown(!orderUpDown);
  }
  function authorHandler() {
    setAuthorDate(false);
  }
  function dateHandler() {
    setAuthorDate(true);
  }
  console.log(posts);
  return (
    <div className={classes.order}>
      <div className={classes.actions}>
        {authorDate ? (
          <>
            <button
              onClick={dateHandler}
              style={{ backgroundColor: "#ba7a92" }}
            >
              Date
            </button>
            <button onClick={authorHandler}>Author</button>
          </>
        ) : (
          <>
            <button onClick={dateHandler}>Date</button>
            <button
              onClick={authorHandler}
              style={{ backgroundColor: "#ba7a92" }}
            >
              Author
            </button>
          </>
        )}
        <button onClick={upDownHandler}>
          {orderUpDown ? (
            <img
              src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/24/000000/external-up-arrows-dreamstale-lineal-dreamstale-12.png"
              alt="upArrow"
            />
          ) : (
            <img
              src="https://img.icons8.com/ios/50/000000/double-down.png"
              alt="downArrow"
            />
          )}
        </button>
      </div>
      <PostList posts={posts} />
    </div>
  );
}

export default OrderPosts;