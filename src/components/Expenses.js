import { cashAdded } from "../features/cashSlice";
import { expenseDeleted } from "../features/expenseSlice";
import { useDispatch } from "react-redux";

function Expenses({ category, date, expense, currency, id }) {
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
        <i
          onClick={() => onDelete(id, expense)}
          className="fa-solid fa-trash-can"
        ></i>
      </div>
    </div>
  );
}

export default Expenses;
