import { useSelector } from "react-redux";
import Transactions from "./Transactions";

function Table() {
  const expenses = useSelector((state) => state.expenses);

  return (
    <div>
      {expenses.map((item) => (
        <Transactions
          key={item.id}
          id={item.id}
          expense={item.expense}
          date={item.date}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default Table;
