import React from "react";
import { NavLink } from "react-router-dom";
const NavItems = ({ item, location, auth }) => {
  return (
    <>
      {!item.private && !item.restricted && (
        <li className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="font-medium"
            activeClassName="text-green-500"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {auth && item.private && !item.restricted && (
        <li className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="font-medium"
            activeClassName="text-green-500"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {!auth && !item.private && item.restricted && (
        <li className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="font-medium"
            activeClassName="text-green-500"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavItems;
