import { forwardRef } from "react";
import styles from "./Modal.module.css";

const Modal = forwardRef(function Modal(_, ref) {
  function closeOnBackdropClick(event) {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  }

  return (
    <dialog
      ref={ref}
      className={styles.modal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={closeOnBackdropClick}
    >
      <span className={styles.separator} aria-hidden="true" />
      <h2 id="modal-title">Hick’s Law</h2>
      <p id="modal-description">
        Jo flere valgmuligheder, jo længere tid tager det at vælge.
      </p>
    </dialog>
  );
});

export default Modal;
