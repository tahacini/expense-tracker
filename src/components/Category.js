import Question from "./Question";
import { useState } from "react";

function Category({ category, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {category}{" "}
      <i onClick={() => setOpen(true)} className="fa-solid fa-trash-can"></i>
      <Question
        open={open}
        setOpen={setOpen}
        onDelete={() => onDelete(category)}
        message={`Are you sure you want to delete category ${category}? It will also delete all transaction in it.`}
      />
    </div>
  );
}

export default Category;
