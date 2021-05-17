import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { errorReducer } from "./phoneBook/error/errorReducer";
import filterReducer from "./phoneBook/filter/filterReduser";
import itemsReduser from "./phoneBook/items/itemsReduser";
import { loaderReducer } from "./phoneBook/loading/loaderReducer";

const rootReduser = combineReducers({
  items: itemsReduser,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});

const store = configureStore(
  {
    reducer: {
      contacts: rootReduser,
    },
  },
  { middleware: [...getDefaultMiddleware()] }
);

export default store;
