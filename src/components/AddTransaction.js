import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { expenseAdded } from "../features/expenseSlice";
import { cashAdded } from "../features/cashSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddTransaction({ onCloseTransaction }) {
  const categories = useSelector((state) => state.categories);
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const today = new Date().toJSON().slice(0, 10);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!expense) {
      alert("Please Add Transaction");
      return;
    }

    dispatch(
      expenseAdded({
        id: nanoid(),
        expense,
        category,
        date: today,
        currency: "₺",
      })
    );

    dispatch(cashAdded(expense));
    setCategory("");
    setExpense("");
    onCloseTransaction();
  };

  const onChange = (e) => {
    if (/^0\d/.test(e.target.value.toString())) {
      return;
    }
    setExpense(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Write your Transaction</label>
          <input
            type="number"
            value={expense}
            onChange={onChange}
            placeholder="New Transaction"
          />
        </div>
        <div>
          <label>Select Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
