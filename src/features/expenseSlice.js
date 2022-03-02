import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    date: "2022-03-01",
    category: "Work",
    expense: 300,
  },
  {
    id: 2,
    date: "2022-03-01",
    category: "Work",
    expense: 400,
  },
];

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    expenseAdded(state, action) {
      return [...state, action.payload];
    },
    expenseDeleted(state, action) {
      return state.filter((pre) => pre.id !== action.payload);
    },
    categoryExpenseDeleted(state, action) {
      return state.filter((pre) => pre.category !== action.payload);
    },
  },
});

export const { expenseAdded, expenseDeleted, categoryExpenseDeleted } =
  expenseSlice.actions;

export default expenseSlice.reducer;
