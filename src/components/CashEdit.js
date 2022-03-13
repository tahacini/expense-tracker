import { useDispatch } from "react-redux";
import { cashEdited } from "../features/cashSlice";
import { useState, useEffect } from "react";

function CashEdit({ open, setOpen }) {
  const [cash, setCash] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (/^0\d/.test(e.target.value) || e.target.value.length >= 11) {
      return;
    }

    if (/^-?\d+$|^$|^-$/g.test(e.target.value)) {
      setCash(e.target.value);
    }
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

  // Close when clicked outside

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
      <div id="balance" className="cash-edit-container flex">
        <label className="fs-200">Change Balance</label>
        <input
          type="text"
          name="cash"
          placeholder="New Balance"
          className="input-text fs-50 margin-bottom"
          value={cash}
          onChange={onChange}
        />
        <div className="flex btn-container">
          <div className="btn" onClick={onClose}>
            Cancel
          </div>
          <div className="btn" onClick={onClick}>
            Change
          </div>
        </div>
      </div>
    </>
  );
}

export default CashEdit;
