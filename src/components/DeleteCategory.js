import { useDispatch } from "react-redux";
import { categoryDeleted } from "../features/categorySlice";
import { useSelector } from "react-redux";
import { categoryExpenseDeleted } from "../features/expenseSlice";
import { cashAdded } from "../features/cashSlice";

function DeleteCategory() {
  const categories = useSelector((state) => state.categories);
  const expense = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const onDelete = (el) => {
    const expenseArray = expense.map((item) => {
      if (item.category === el) {
        return item.expense;
      }
      return null;
    });
    const total = expenseArray.reduce((pre, cur) => +pre + +cur, 0);

    dispatch(cashAdded(-total));
    dispatch(categoryDeleted(el));
    dispatch(categoryExpenseDeleted(el));
  };

  return (
    <div className="category-container grid">
      {categories.map((el) => (
        <div key={el.id}>
          {el.category}{" "}
          <i
            onClick={() => onDelete(el.category)}
            className="fa-solid fa-trash-can"
          ></i>
        </div>
      ))}
    </div>
  );
}

export default DeleteCategory;
