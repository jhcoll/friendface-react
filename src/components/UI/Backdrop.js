import classes from "./Backdrop.module.css";

function Backdrop({ onClick }) {
  return <div className={classes.backdrop} onClick={onClick} />;
}

export default Backdrop;
