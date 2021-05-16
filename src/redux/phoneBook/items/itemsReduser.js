import { createReducer } from "@reduxjs/toolkit";
import { addALLContact, addContact, deleteContact } from "./itemsAction";

const itemsReduser = createReducer([], {
  [addALLContact]: (_, { payload }) => payload,
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    ...state.filter((contact) => contact.id !== payload),
  ],
});

export default itemsReduser;
