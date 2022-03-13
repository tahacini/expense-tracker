import Cash from "./Cash";
import Transaction from "./Transaction";

function Manage() {
  return (
    <div className="flex manage section-margin">
      <Cash />
      <Transaction />
    </div>
  );
}

export default Manage;
