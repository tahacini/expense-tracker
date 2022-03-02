import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import expenseReducer from "../features/expenseSlice";
import categoryReducer from "../features/categorySlice";
import cashReducer from "../features/cashSlice";

const reducer = combineReducers({
  expenses: expenseReducer,
  categories: categoryReducer,
  cash: cashReducer,
});

const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };

const hydrateStore = () => {
  if (localStorage.getItem("applicationState")) {
    return JSON.parse(localStorage.getItem("applicationState"));
  }
};

export default configureStore({
  reducer,
  preloadedState: hydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
