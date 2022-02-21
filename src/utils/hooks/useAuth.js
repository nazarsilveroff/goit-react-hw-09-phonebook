import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  loginOperations,
  registerOperations,
} from "../../redux/auth/authOperations";

export const useAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const login = (value) => dispatch(loginOperations(value));
  const registration = (value) => dispatch(registerOperations(value));
  return { location, login, registration };
};
