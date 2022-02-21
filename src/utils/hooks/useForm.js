import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts } from "../../redux/phoneBook/filter/filterSelectors";
import { addContactOptions } from "../../redux/phoneBook/items/itemsOptions";

export const useForm = () => {
  const dispatch = useDispatch();
  const addContact = (values) => dispatch(addContactOptions(values));
  const items = useSelector((state) => getFilteredContacts(state));
  return {
    addContact,
    items,
  };
};
