function Expenses({ category, date, expense, currency, id }) {
  return (
    <div className="flex">
      <div>{category}</div>
      <div>
        <div>
          {expense >= 0 ? "+" : "-"}
          {currency}
          {expense < 0 ? expense.slice(1) : expense}
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default Expenses;
