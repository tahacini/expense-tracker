import { useSelector } from "react-redux";
import { useState } from "react";
import NewTransaction from "./NewTransaction";

function Transaction() {
  const cash = useSelector((state) => state.cash);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        New Transaction <i className="fa-solid fa-circle-plus"></i>
      </div>
      <NewTransaction open={open} setOpen={setOpen} />
    </>
  );
}

export default Transaction;
