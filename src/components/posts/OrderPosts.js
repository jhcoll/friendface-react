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
  function upHandler() {
    setOrderUpDown(false);
  }
  function downHandler() {
    setOrderUpDown(true);
  }
  function authorHandler() {
    setAuthorDate(false);
  }
  function dateHandler() {
    setAuthorDate(true);
  }
  return (
    <>
      <div className={classes.order}>
        <div className={classes.actions}>
          {orderUpDown ? (
            <button onClick={upHandler}>UP</button>
          ) : (
            <button onClick={upHandler} style={{ backgroundColor: "blue" }}>
              UP
            </button>
          )}
        </div>

        {authorDate ? (
          <>
            <div>
              <button onClick={dateHandler} style={{ backgroundColor: "blue" }}>
                Date
              </button>
            </div>
            <div>
              <button onClick={authorHandler}>Author</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <button onClick={dateHandler}>Date</button>
            </div>
            <div>
              <button
                onClick={authorHandler}
                style={{ backgroundColor: "blue" }}
              >
                Author
              </button>
            </div>
          </>
        )}
        <div className={classes.actions}>
          {orderUpDown ? (
            <button onClick={downHandler} style={{ backgroundColor: "blue" }}>
              DOWN
            </button>
          ) : (
            <button onClick={downHandler}>DOWN</button>
          )}
        </div>
      </div>
      <PostList posts={posts} />
    </>
  );
}

export default OrderPosts;
