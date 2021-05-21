import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { authReducers } from "./auth/authReducers";
import { errorReducer } from "./phoneBook/error/errorReducer";
import filterReducer from "./phoneBook/filter/filterReduser";
import itemsReduser from "./phoneBook/items/itemsReduser";
import { loaderReducer } from "./phoneBook/loading/loaderReducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReduser = combineReducers({
  items: itemsReduser,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});

const persistedReducer = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["tokens"],
  },
  authReducers
);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    contacts: rootReduser,
    auth: persistedReducer,
  },
  middleware: middleware,
});

export const persistor = persistStore(store);
