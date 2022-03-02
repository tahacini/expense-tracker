import { useDispatch } from "react-redux";
import { cashEdited } from "../features/cashSlice";
import { useState, useEffect } from "react";

function NewTransaction({ open, setOpen }) {
  if (!open) return null;

  return <div>NewTransaction</div>;
}

export default NewTransaction;
