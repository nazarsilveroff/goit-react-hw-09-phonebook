import React, { memo } from "react";
const ContactItems = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;
  return (
    <>
      <li className="flex mx-4 my-2">
        <p className="flex-grow font-medium">
          {name}-{number}
        </p>
        <button
          className="px-4 py-2 text-xs font-semibold tracking-wider text-white rounded bg-gray-800 hover:bg-gray-600"
          id={id}
          type="button"
          onClick={deleteContact}
        >
          DELETE
        </button>
      </li>
    </>
  );
};

export default memo(ContactItems);
