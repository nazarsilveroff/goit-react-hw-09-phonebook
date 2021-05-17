import axios from "axios";
import { toast } from "react-toastify";
import { setError } from "../error/erorAction";
import { setLoading } from "../loading/loaderAction";
import { addALLContact, addContact, deleteContact } from "./itemsAction";

const URL = `https://test-35238-default-rtdb.firebaseio.com/`;
const BASE = `phoneBook.json`;
export const addALLContactOptions = () => async (dispatch, getState) => {
  dispatch(setLoading())
  try {
    const { data } = await axios.get(URL + BASE);
    if (data) {
      const contacts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      dispatch(addALLContact(contacts));
    } else return;
  } catch (error) {
    dispatch(setError(toast.error(`☠️Oh damn it ${error.message}!!`)));
  } finally {
     dispatch(setLoading());
  }
};
export const addContactOptions =(contact) => async (dispatch, getState) => {
     dispatch(setLoading());
    try {
      const { data } = await axios.post(URL + BASE, contact);
      dispatch(addContact({ ...contact, id: data.name }));
    } catch (error) {
    dispatch(setError(toast.error(`☠️Oh damn it ${error.message}!!`)));
    } finally {
       dispatch(setLoading());
    }
  };
export const deleteContactOptions =
  (id) => async (dispatch, getState) => {
     dispatch(setLoading());
    try {
      await axios.delete(URL + `phoneBook/${id}.json`);
      dispatch(deleteContact(id));
    } catch (error) {
    dispatch(setError(toast.error(`☠️Oh damn it ${error.message}!!`)));
    } finally {
       dispatch(setLoading());
    }
    };

