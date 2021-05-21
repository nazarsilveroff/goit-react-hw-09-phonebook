import React from "react";
import { connect, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authActions";

const UserInfo = ({ displayName, auth }) => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(logOut());
  return auth ? (
    <>
      <div className="flex items-center sm:flex-row ml-3 pl-2 border-l-2 border-gray-700 h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-600  "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex flex-col ml-2 items-center">
          <strong className="">{displayName}</strong>
          <button
            className=" text-xs font-semibold tracking-wider text-white rounded bg-gray-800 hover:bg-gray-600"
            type="button"
            onClick={signOut}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  ) : null;
};
const mapState = (state) => ({
  displayName: state.auth.tokens.displayName,
  auth: Boolean(state.auth.tokens.idToken),
});
export default connect(mapState)(UserInfo);
