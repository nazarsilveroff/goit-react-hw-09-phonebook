import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./filterAction";
const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});
export default filterReducer;