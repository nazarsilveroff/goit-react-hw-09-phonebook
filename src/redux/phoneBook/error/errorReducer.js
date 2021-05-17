import { createReducer } from "@reduxjs/toolkit";
import { resetError, setError } from "./erorAction";

export const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});
