import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "cash",
  cash: 1000,
  currency: "₺",
};

const cashSlice = createSlice({
  name: "cash",
  initialState,
  reducers: {
    cashAdded(state, action) {
      return [...state, action.payload];
    },
    cashEdited(state, action) {
      state.cash = action.payload;
    },
  },
});

export const { cashAdded, cashEdited } = cashSlice.actions;

export default cashSlice.reducer;
