import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import AddTransaction from "./AddTransaction";
import DeleteCategory from "./DeleteCategory";

function NewTransaction({ open, setOpen }) {
  const [active, setActive] = useState("Transaction");

  const onCloseTransaction = () => {
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

    function onClickOutSide(e) {
      if (document.getElementById("transaction").contains(e.target)) {
        return;
      }

      onCloseTransaction();
    }
  }, [open]);

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
        <div className="flex">
          <div onClick={() => changeActive("Transaction")}>Add Transaction</div>
          <div onClick={() => changeActive("Category")}>Add Category</div>
          <div onClick={() => changeActive("DeleteCateg")}>Delete Category</div>
        </div>
        <div>{renderSwitch(active)}</div>
      </div>
      ;
    </>
  );
}

export default NewTransaction;
