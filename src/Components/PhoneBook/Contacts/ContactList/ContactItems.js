import React from "react";
const ContactItems = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;
  return (
    <>
      <li>
        {name}-{number}
        <button id={id} type="button" onClick={deleteContact}>
          DELETE
        </button>
      </li>
    </>
  );
};

export default ContactItems;
