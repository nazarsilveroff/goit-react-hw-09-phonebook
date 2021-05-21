import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoates";
import UserInfo from "../../UserInfo/UserInfo";
import NavItems from "./NavItems";
const Navigation = ({ location, auth }) => {
  return (
    <nav className=" font-sans flex flex-col items-center justify-center text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow-lg sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 inner">
        <NavLink
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
        >
          Home
        </NavLink>
      </div>
      <ul className="flex sm:mb-0 self-center items-center justify-center ">
        {mainRoutes.map((item) => (
          <NavItems
            item={item}
            location={location}
            key={item.path}
            auth={auth}
          />
        ))}
        <UserInfo />
      </ul>
    </nav>
  );
};
const mapState = (state) => ({
  auth: Boolean(state.auth.tokens.idToken),
});
export default connect(mapState)(withRouter(Navigation));
