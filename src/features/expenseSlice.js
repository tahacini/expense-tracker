import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    expense: 10000,
    category: "Salary",
    date: "2022-02-01",
    currency: "₺",
  },
  {
    id: 2,
    expense: -2000,
    category: "Housing",
    date: "2022-02-02",
    currency: "₺",
  },
  {
    id: 3,
    expense: -2000,
    category: "Food and Beverage",
    date: "2022-02-02",
    currency: "₺",
  },
  {
    id: 4,
    expense: -500,
    category: "Food and Beverage",
    date: "2022-02-15",
    currency: "₺",
  },
  {
    id: 5,
    expense: 10000,
    category: "Salary",
    date: "2022-03-01",
    currency: "₺",
  },

  {
    id: 6,
    expense: -800,
    category: "Fuel",
    date: "2022-03-03",
    currency: "₺",
  },
  {
    id: 7,
    expense: -250,
    category: "Repairments",
    date: "2022-03-10",
    currency: "₺",
  },
  {
    id: 8,
    expense: -175,
    category: "Entertainment",
    date: "2022-03-12",
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
