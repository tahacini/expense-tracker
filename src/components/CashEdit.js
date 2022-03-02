import { useDispatch } from "react-redux";
import { cashEdited } from "../features/cashSlice";
import { useState, useEffect } from "react";

function CashEdit({ open, setOpen }) {
  const [cash, setCash] = useState("");
  const dispatch = useDispatch();

  const onClose = () => {
    setOpen(false);
    setCash("");
  };

  const onChange = (e) => {
    if (/^0\d/.test(e.target.value.toString())) {
      return;
    }

    setCash(e.target.value);
  };

  const onClick = () => {
    if (!cash) {
      return;
    }

    dispatch(cashEdited(cash));
    setCash("");
    onClose();
  };

  // Close results when clicked outside

  useEffect(() => {
    if (open) {
      window.addEventListener("click", onClickOutSide);
    }

    return () => {
      window.removeEventListener("click", onClickOutSide);
    };

    function onClickOutSide(e) {
      if (document.getElementById("balance").contains(e.target)) {
        return;
      }

      onClose();
    }
  }, [open]);

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
