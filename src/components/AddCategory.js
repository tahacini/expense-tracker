import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { categoryAdded } from "../features/categorySlice";

function AddCategory({ onCloseTransaction }) {
  const [category, setCategory] = useState("");
  const categ = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      alert("Please Add category");
      return;
    }

    let formated = category
      .trim()
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

    for (let i = 0; i < categ.length; i++) {
      if (categ[i].category === formated) {
        alert("Category Already Exist");
        return;
      }
    }

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    dispatch(
      categoryAdded({
        id: nanoid(),
        category: formated,
        color: "#" + randomColor,
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
