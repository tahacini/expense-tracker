import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    expense: 300,
    category: "Work",
    date: "2022-03-01",
    currency: "₺",
  },
  {
    id: 2,
    expense: 400,
    category: "Work",
    date: "2022-03-01",
    currency: "₺",
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
