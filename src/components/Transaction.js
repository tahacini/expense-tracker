import { useState } from "react";
import NewTransaction from "./NewTransaction";

function Transaction() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-center">
      <div className="new-transaction fs-150" onClick={() => setOpen(true)}>
        <div>
          New Transaction <i className="fa-solid fa-circle-plus"></i>
        </div>
      </div>
      <NewTransaction open={open} setOpen={setOpen} />
    </div>
  );
}

export default Transaction;
