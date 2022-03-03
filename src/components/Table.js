import { useSelector } from "react-redux";
import Expenses from "./Expenses";

function Table() {
  const expenses = useSelector((state) => state.expenses);

  return (
    <div>
      {expenses.map((item) => (
        <Expenses
          key={item.id}
          id={item.id}
          expense={item.expense}
          date={item.date}
          category={item.category}
          currency={item.currency}
        />
      ))}
    </div>
  );
}

export default Table;
