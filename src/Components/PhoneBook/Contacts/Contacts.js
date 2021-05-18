import ContactItems from "./ContactList/ContactItems";
import { ContactWrapper } from "./contactStyled";

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ContactWrapper>
      <h2>Contacts</h2>
      <ul>
        {contacts?.map((contact) => (
          <ContactItems
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </ContactWrapper>
  );
};

export default Contacts;
