import React, { memo } from "react";
import { useContacts } from "../../../hooks/useContacts";
const ContactItems = ({ contact }) => {
  const { name, number, id } = contact;
  const { deleteContact } = useContacts();
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
          onClick={(e) => deleteContact(id)}
        >
          DELETE
        </button>
      </li>
    </>
  );
};

export default memo(ContactItems);
