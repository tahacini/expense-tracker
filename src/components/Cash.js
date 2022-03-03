import { useSelector } from "react-redux";
import { useState } from "react";
import CashEdit from "./CashEdit";

function Cash() {
  const cash = useSelector((state) => state.cash);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex">
        <div>
          {cash.cash >= 0 ? "+" : "-"}
          {cash.currency}
          {cash.cash < 0 ? cash.cash.toString().slice(1) : cash.cash}
        </div>
        <div onClick={() => setOpen(true)}>Edit Balance</div>
        <CashEdit open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Cash;
