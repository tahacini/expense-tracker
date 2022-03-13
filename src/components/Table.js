import { useSelector } from "react-redux";
import Expenses from "./Expenses";

function Table() {
  const expenses = useSelector((state) => state.expenses);
  const reversedArray = [...expenses].reverse();

  return (
    <div
      className="section-margin grid table"
      style={
        reversedArray.length > 5
          ? { overflowY: "scroll" }
          : { overflowY: "auto", marginRight: "14px" }
      }
    >
      {reversedArray.map((item) => (
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
