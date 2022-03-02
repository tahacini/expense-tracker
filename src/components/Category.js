import { useSelector, useDispatch } from "react-redux";
import { categoryDeleted } from "../features/categorySlice";
import { categoryExpenseDeleted } from "../features/expenseSlice";

function Category() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleDelete = (category) => {
    dispatch(categoryExpenseDeleted(category));
    dispatch(categoryDeleted(category));
  };

  return (
    <div>
      {categories.map((item) => (
        <div key={item.id}>
          {item.category}
          <button onClick={() => handleDelete(item.category)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Category;
