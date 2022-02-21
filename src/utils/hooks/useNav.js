import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { token } from "../../redux/auth/authSelectors";

export const useNav = () => {
  const location = useLocation();
  const authToken = useSelector((state) => token(state));
  return {
    location,
    authToken,
  };
};
