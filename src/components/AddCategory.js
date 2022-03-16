import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { categoryAdded } from "../features/categorySlice";
import ErrorMessage from "./ErrorMessage";

function AddCategory({ onCloseTransaction }) {
  const [category, setCategory] = useState("");
  const categ = useSelector((state) => state.categories);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      setIsError(true);
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
    setIsError(false);
  };

  return (
    <div>
      <form>
        <div className="margin-bottom">
          <label className="fs-200">Write your category</label>
          {isError ? <ErrorMessage /> : <></>}
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Add Category"
            className="input-text"
          />
        </div>
        <div className="btn" onClick={onSubmit}>
          Save Category
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
