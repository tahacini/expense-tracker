import { useEffect } from "react";
import ReactDom from "react-dom";

function Question({ open, setOpen, onDelete, message }) {
  const deleteItem = () => {
    window.removeEventListener("click", onClickOutSide);
    onDelete();
  };

  const onClose = () => {
    window.removeEventListener("click", onClickOutSide);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("click", onClickOutSide);
    }

    return () => {
      window.removeEventListener("click", onClickOutSide);
    };
  }, [open, setOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  function onClickOutSide(e) {
    if (document.getElementById("question").contains(e.target)) {
      return;
    }
    onClose();
  }

  if (!open) return null;

  return ReactDom.createPortal(
    <div id="question-container">
      <div className="modal-background modal-question"></div>
      <div id="question" className="question-container">
        <div className="fs-400">{message}</div>
        <div className="flex fs-200 questiion-yesno">
          <div onMouseUp={deleteItem} className="yes btn-yesno">
            Yes <i className="fa-solid fa-check"></i>
          </div>
          <div onMouseUp={onClose} className="no btn-yesno">
            No <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Question;
