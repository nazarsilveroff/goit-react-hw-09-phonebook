import { useContacts } from "../../hooks/useContacts";
import LoaderContacts from "../../loaders/LoaderContacts/LoaderContacts";

import ContactItems from "./ContactList/ContactItems";

const Contacts = () => {
  const { items, loader } = useContacts();
  return (
    <>
      <h2 className="text-center font-semibold text-2xl lg:text-2xl text-gray-800">
        Contacts
      </h2>
      <div className=" relative bg-white shadow-md rounded-lg px-3 py-2 mb-4 ">
        {loader ? (
          <LoaderContacts />
        ) : (
          <ul className="flex-column">
            {items?.map((contact) => (
              <ContactItems contact={contact} key={contact.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Contacts;
