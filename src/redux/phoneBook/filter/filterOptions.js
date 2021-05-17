import { setFilter } from "./filterAction";

export const setFilterOptions = (value) => (dispatch, getState) => {
  dispatch(setFilter(value));
};
