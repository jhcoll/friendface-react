import classes from "./OrderPosts.module.css";
import PostList from "./PostList";
import { useState } from "react";
import action from "./buttons/Button.module.css";

function OrderPosts({ posts, errorText, setErrorText, idToken, userId }) {
  const [orderUpDown, setOrderUpDown] = useState(true);
  const [authorDate, setAuthorDate] = useState(true);
  const btnColour = "#8b9dc3";

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
  return (
    <>
      <div className={classes.order}>
        <h5>Order By:</h5>
        <div className={action.actions}>
          {authorDate ? (
            <>
              <button
                onClick={dateHandler}
                style={{ backgroundColor: btnColour }}
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
                style={{ backgroundColor: btnColour }}
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
      </div>
      <PostList
        posts={posts}
        errorText={errorText}
        setErrorText={setErrorText}
        idToken={idToken}
        userId={userId}
      />
    </>
  );
}

export default OrderPosts;
