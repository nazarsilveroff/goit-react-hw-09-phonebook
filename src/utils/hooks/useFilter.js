import { useDispatch, useSelector } from "react-redux";
import { setFilterOptions } from "../../redux/phoneBook/filter/filterOptions";
import { getFilter } from "../../redux/phoneBook/filter/filterSelectors";

export const useFilter = () => {
  const dispatch = useDispatch();
  const setFilter = (value) => dispatch(setFilterOptions(value));
  const filter = useSelector((state) => getFilter(state));
  return {
    setFilter,
    filter,
  };
};
