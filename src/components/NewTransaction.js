import { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import AddTransaction from "./AddTransaction";
import DeleteCategory from "./DeleteCategory";

function NewTransaction({ open, setOpen }) {
  const [active, setActive] = useState("Transaction");

  const onStyle = {
    backgroundColor: "var(--clr-primary-blackish)",
  };
  const offStyle = {
    backgroundColor: "var(--clr-side-black",
  };

  const onCloseTransaction = () => {
    window.removeEventListener("click", onClickOutSide);
    setActive("Transaction");
    setOpen(false);
  };

  const changeActive = (el) => {
    setActive(el);
  };

  // Close results when clicked outside

  useEffect(() => {
    if (open) {
      window.addEventListener("click", onClickOutSide);
    }

    return () => {
      window.removeEventListener("click", onClickOutSide);
    };
  }, [open, active]); // eslint-disable-line react-hooks/exhaustive-deps

  function onClickOutSide(e) {
    if (document.getElementById("transaction").contains(e.target)) {
      return;
    }
    const question = document.getElementById("question-container");
    if (question) {
      if (document.getElementById("question-container").contains(e.target)) {
        return;
      }
    }
    onCloseTransaction();
  }

  // Render Active Switch

  const renderSwitch = (active) => {
    switch (active) {
      case "Category":
        return <AddCategory onCloseTransaction={onCloseTransaction} />;
      case "DeleteCateg":
        return <DeleteCategory />;
      default:
        return <AddTransaction onCloseTransaction={onCloseTransaction} />;
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="modal-background"></div>
      <div id="transaction" className="transaction-container">
        <div className="flex select-container fs-100 margin-bottom">
          <div
            style={active === "Transaction" ? onStyle : offStyle}
            className="btn-transaction"
            onClick={() => changeActive("Transaction")}
          >
            Add Transaction
          </div>
          <div
            style={active === "Category" ? onStyle : offStyle}
            className="btn-transaction"
            onClick={() => changeActive("Category")}
          >
            Add Category
          </div>
          <div
            style={active === "DeleteCateg" ? onStyle : offStyle}
            className="btn-transaction"
            onClick={() => changeActive("DeleteCateg")}
          >
            Delete Category
          </div>
        </div>
        <div>{renderSwitch(active)}</div>
      </div>
    </>
  );
}

export default NewTransaction;
