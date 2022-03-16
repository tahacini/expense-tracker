import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { expenseAdded } from "../features/expenseSlice";
import { cashAdded } from "../features/cashSlice";
import { nanoid } from "@reduxjs/toolkit";
import ErrorMessage from "../ErrorMessage";

function AddTransaction({ onCloseTransaction }) {
  const categories = useSelector((state) => state.categories);
  const [expense, setExpense] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [category, setCategory] = useState("");
  const [isError, setIsError] = useState(false);
  const today = new Date().toJSON().slice(0, 10);
  const dispatch = useDispatch();

  const onStyle = {
    backgroundColor: "var(--clr-primary-blackish)",
  };
  const offStyle = {
    backgroundColor: "var(--clr-side-black",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!expense) {
      setIsError(true);
      return;
    }

    let formatedExpense = isExpense ? "-" + expense : expense;

    dispatch(
      expenseAdded({
        id: nanoid(),
        expense: formatedExpense,
        category: category ? category : "Other",
        date: today,
        currency: "₺",
      })
    );

    dispatch(cashAdded(formatedExpense));
    setCategory("");
    setExpense("");
    setIsExpense(true);
    onCloseTransaction();
    setIsError(false);
  };

  const onChange = (e) => {
    if (/^0\d/.test(e.target.value) || e.target.value.length >= 11) {
      return;
    }
    if (/^\d+$|^$/g.test(e.target.value)) {
      setExpense(e.target.value);
    }
  };

  return (
    <div>
      <form>
        <div className="flex btn-container margin-bottom">
          <div
            style={isExpense ? onStyle : offStyle}
            className="btn"
            onClick={() => setIsExpense(true)}
          >
            Expense
          </div>
          <div
            style={!isExpense ? onStyle : offStyle}
            className="btn"
            onClick={() => setIsExpense(false)}
          >
            Income
          </div>
        </div>
        <div className="margin-bottom">
          <label className="fs-200">Write your Transaction</label>
          {isError ? <ErrorMessage /> : <></>}
          <input
            type="text"
            value={expense}
            onChange={onChange}
            className="input-text"
            placeholder="New Transaction"
          />
        </div>
        <div className="margin-bottom flex column">
          <label className="fs-200">Select Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-text"
          >
            <option value={""}></option>
            {categories.map((el) => (
              <option key={el.id} value={el.category}>
                {el.category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="btn" onClick={onSubmit}>
            Add
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
