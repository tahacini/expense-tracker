import Cash from "./Cash";
import Transaction from "./Transaction";

function Manage() {
  return (
    <div className="flex">
      <Cash />
      <Transaction />
    </div>
  );
}

export default Manage;
