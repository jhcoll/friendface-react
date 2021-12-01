import Post from "./Post";
import classes from "./ErrorModal.module.css";
import action from "../posts/buttons/Button.module.css";

function ErrorModal({ onClick, text }) {
  return (
    <Post>
      <div className={classes.error}>
        <div className={classes.text}>{text}</div>
        <div className={action.actions}>
          <button onClick={onClick}>ok</button>
        </div>
      </div>
    </Post>
  );
}

export default ErrorModal;
