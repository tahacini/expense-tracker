import { useDispatch } from "react-redux";
import { cashEdited } from "../features/cashSlice";
import { useState, useEffect } from "react";

function CashEdit({ open, setOpen }) {
  const [cash, setCash] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (/^0\d/.test(e.target.value.toString())) {
      return;
    }
    setCash(e.target.value);
  };

  const onClose = () => {
    window.removeEventListener("click", onClickOutSide);
    setOpen(false);
    setCash("");
  };

  const onClick = () => {
    if (!cash) {
      return;
    }

    onClose();
    dispatch(cashEdited(cash));
    setCash("");
  };

  // Close results when clicked outside

  useEffect(() => {
    if (open) {
      window.addEventListener("click", onClickOutSide);
    }

    return () => {
      window.removeEventListener("click", onClickOutSide);
    };
  }, [open, onClick]); // eslint-disable-line react-hooks/exhaustive-deps

  function onClickOutSide(e) {
    if (document.getElementById("balance").contains(e.target)) {
      return;
    }
    onClose();
  }

  if (!open) return null;

  return (
    <>
      <div className="modal-background"></div>
      <div id="balance" className="cash-edit-container">
        <label>Change Balance</label>
        <input
          type="number"
          name="cash"
          placeholder="New Balance"
          value={cash}
          onChange={onChange}
        />
        <div>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onClick}>Change</button>
        </div>
      </div>
    </>
  );
}

export default CashEdit;
