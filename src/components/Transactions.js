function Transactions({ category, date, expense, id }) {
  return (
    <div className="flex">
      <div>{category}</div>
      <div>
        <div>
          {expense >= 0 ? "+" : "-"}
          {expense}
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default Transactions;
