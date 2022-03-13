import { useSelector } from "react-redux";
import { useState } from "react";
import CashEdit from "./CashEdit";

function Cash() {
  const cash = useSelector((state) => state.cash);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex balance">
      <div
        className="cash fs-50"
        style={
          cash.cash >= 0 ? { color: "rgb(20, 189, 20)" } : { color: "red" }
        }
      >
        {cash.cash >= 0 ? "+" : "-"}
        {cash.currency}
        {cash.cash < 0 ? cash.cash.toString().slice(1) : cash.cash}
      </div>
      <div className="edit-balance grid fs-150" onClick={() => setOpen(true)}>
        Edit Balance
      </div>
      <CashEdit open={open} setOpen={setOpen} />
    </div>
  );
}

export default Cash;
