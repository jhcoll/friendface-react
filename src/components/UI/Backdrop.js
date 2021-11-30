import classes from "./Backdrop.module.css";

function Backdrop({ onClick, zIndex}) {
  return <div className={classes.backdrop} onClick={onClick} style={{ zIndex: zIndex}}/>;
}

export default Backdrop;
