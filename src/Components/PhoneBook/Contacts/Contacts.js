import { connect } from "react-redux";
import { getFilteredContacts } from "../../../redux/phoneBook/filter/filterSelectors";
import { getLoader } from "../../../redux/phoneBook/loading/loaderSelectors";
import LoaderContacts from "../../loaders/LoaderContacts/LoaderContacts";

import ContactItems from "./ContactList/ContactItems";

const Contacts = ({ items, deleteContact, loader }) => {
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
              <ContactItems
                contact={contact}
                key={contact.id}
                deleteContact={deleteContact}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
const mapState = (state) => ({
  loader: getLoader(state),
  items: getFilteredContacts(state),
});
export default connect(mapState)(Contacts);
