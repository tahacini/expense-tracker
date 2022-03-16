import { cashAdded } from "../features/cashSlice";
import { expenseDeleted } from "../features/expenseSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Question from "./Question";

function Expenses({ category, date, expense, currency, id }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onDelete = (id, expense) => {
    dispatch(expenseDeleted(id));
    dispatch(cashAdded(-expense));
  };

  return (
    <div className="grid table-expenses fs-50">
      <div>{category}</div>
      <div>
        <div
          style={
            expense >= 0 ? { color: "rgb(20, 189, 20)" } : { color: "red" }
          }
        >
          {expense >= 0 ? "+" : "-"}
          {currency}
          {expense < 0 ? expense.toString().slice(1) : expense}
        </div>
        <div>{date}</div>
      </div>
      <div>
        <i onClick={() => setOpen(true)} className="fa-solid fa-trash-can"></i>
      </div>
      <Question
        open={open}
        setOpen={setOpen}
        onDelete={() => onDelete(id, expense)}
        message={"Are you sure you want to delete this transaction?"}
      />
    </div>
  );
}

export default Expenses;
