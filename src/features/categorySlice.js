import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    category: "Salary",
    color: "rgba(255, 99, 132, 1)",
  },
  {
    id: 2,
    category: "Housing",
    color: "rgba(54, 162, 235, 1)",
  },
  {
    id: 3,
    category: "Food and Beverage",
    color: "rgba(255, 206, 86, 1)",
  },
  {
    id: 4,
    category: "Fuel",
    color: "rgba(75, 192, 192, 1)",
  },
  {
    id: 5,
    category: "Entertainment",
    color: "#FA1305",
  },
  {
    id: 6,
    category: "Repairments",
    color: "#BA04DE",
  },
];

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoryAdded(state, action) {
      return [...state, action.payload];
    },
    categoryDeleted(state, action) {
      return state.filter((pre) => pre.category !== action.payload);
    },
  },
});

export const { categoryAdded, categoryDeleted } = categorySlice.actions;

export default categorySlice.reducer;
