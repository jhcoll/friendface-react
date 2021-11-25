import classes from "./OrderPosts.module.css";

function OrderPosts({
  orderUpDown,
  setOrderUpDown,
  authorDate,
  setAuthorDate,
}) {
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
            <button onClick={authorHandler} style={{ backgroundColor: "blue" }}>
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
  );
}

export default OrderPosts;
