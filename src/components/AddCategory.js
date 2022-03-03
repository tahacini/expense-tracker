import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { categoryAdded } from "../features/categorySlice";

function AddCategory({ onCloseTransaction }) {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      alert("Please Add category");
      return;
    }

    dispatch(
      categoryAdded({
        id: nanoid(),
        category,
      })
    );

    setCategory("");
    onCloseTransaction();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Write your category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Add Category"
          />
        </div>
        <div>
          <input type={"submit"} value={"Save Category"} />
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
