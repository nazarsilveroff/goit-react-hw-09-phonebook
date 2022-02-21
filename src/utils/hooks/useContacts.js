import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts } from "../../redux/phoneBook/filter/filterSelectors";
import {
  addALLContactOptions,
  deleteContactOptions,
} from "../../redux/phoneBook/items/itemsOptions";
import { getLoader } from "../../redux/phoneBook/loading/loaderSelectors";

export const useContacts = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => getLoader(state));
  const items = useSelector((state) => getFilteredContacts(state));
  const deleteContact = (value) => dispatch(deleteContactOptions(value));
  const getAllContact = useCallback(
    () => dispatch(addALLContactOptions()),
    [dispatch]
  );
  return {
    loader,
    items,
    deleteContact,
    getAllContact,
  };
};
