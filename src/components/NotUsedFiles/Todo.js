import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [showModal, setModalIsOpen] = useState(false);

  function showModalHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onClick={closeModalHandler} />}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
