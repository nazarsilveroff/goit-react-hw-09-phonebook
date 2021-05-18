import React, { Component } from "react";
import Contacts from "./Contacts/Contacts";
import ClientsFilter from "./Form/Filter/filter";
import Form from "./Form/Form";
import { PhoneBookWrapper } from "./phoneBookStyled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import {
  addALLContactOptions,
  addContactOptions,
  deleteContactOptions,
} from "../../redux/phoneBook/items/itemsOptions";
import { setFilterOptions } from "../../redux/phoneBook/filter/filterOptions";
import Loader from "react-loader-spinner";
import { getFilter, getFilteredContacts } from "../../redux/phoneBook/filter/filterSelectors";
import { getLoader } from "../../redux/phoneBook/loading/loaderSelectors";

class PhoneBook extends Component {
  async componentDidMount() {
    this.props.addALLContactOptions();
  }

  addContact = async (contact) => {
    if (this.props.contacts.items.some(({ name }) => name === contact.name)) {
      toast.warn(`🦄${contact.name}, is already in contacts!`);
    } else {
      this.props.addContactOptions(contact);
    }
  };

  deleteContact = async (e) => {
    const { id } = e.target;
    this.props.deleteContactOptions(id);
  };
  setFilter = (e) => {
    const { value } = e.target;
    this.props.setFilterOptions(value);
  };
  // getFilteredContacts = () => {
  //   return this.props.contacts.items?.filter((contact) =>
  //     contact.name
  //       .toLowerCase()
  //       .includes(this.props.contacts.filter?.toLowerCase())
  //   );
  // };

  render() {
    return (
      <PhoneBookWrapper>
        <ToastContainer />
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
        <ClientsFilter
          setFilter={this.setFilter}
          filter={this.props.contacts.filter}
        />
        {this.props.contacts.loader ? (
          <Loader />
        ) : (
          <Contacts
            contacts={this.props.contacts.items}
            deleteContact={this.deleteContact}
          />
        )}
      </PhoneBookWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: {
    items: getFilteredContacts(state),
    filter: getFilter(state),
    loader: getLoader(state),
  },
});
const mapDispatch = {
  addALLContactOptions,
  addContactOptions,
  deleteContactOptions,
  setFilterOptions,
};
export default connect(mapStateToProps, mapDispatch)(PhoneBook);
