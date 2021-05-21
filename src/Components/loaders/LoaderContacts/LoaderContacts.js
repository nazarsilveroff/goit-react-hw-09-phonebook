import React from "react";
import { LoaderWraper } from "./LoaderContactsStyled";
const LoaderContacts = () => {
  return (
    <LoaderWraper>
      <div className="loader" id="loader-4">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </LoaderWraper>
  );
};

export default LoaderContacts;
