import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "cash",
  cash: 5000,
  currency: "₺",
};

const cashSlice = createSlice({
  name: "cash",
  initialState,
  reducers: {
    cashAdded(state, action) {
      state.cash = +state.cash + +action.payload;
    },
    cashEdited(state, action) {
      state.cash = action.payload;
    },
  },
});

export const { cashAdded, cashEdited } = cashSlice.actions;

export default cashSlice.reducer;
