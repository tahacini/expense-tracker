import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    category: "Work",
  },
  {
    id: 2,
    category: "Housing",
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
