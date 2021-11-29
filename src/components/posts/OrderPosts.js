import classes from "./OrderPosts.module.css";

function OrderPosts({
  orderUpDown,
  setOrderUpDown,
  authorDate,
  setAuthorDate,
}) {
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
    </div>
  );
}

export default OrderPosts;
