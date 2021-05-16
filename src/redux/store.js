import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from "./phoneBook/filter/filerReduser";
import itemsReduser from "./phoneBook/items/itemsReduser";

const rootReduser = combineReducers({
  items: itemsReduser,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: rootReduser
  },
});


export default store;
