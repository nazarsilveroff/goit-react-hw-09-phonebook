import React, { Component } from "react";
import Contacts from "./Contacts/Contacts";
import ClientsFilter from "./Form/Filter/filter";
import Form from "./Form/Form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import {
  addALLContactOptions,
  addContactOptions,
  deleteContactOptions,
} from "../../redux/phoneBook/items/itemsOptions";
import { setFilterOptions } from "../../redux/phoneBook/filter/filterOptions";
import {
  getFilter,
  getFilteredContacts,
} from "../../redux/phoneBook/filter/filterSelectors";
import { getLoader } from "../../redux/phoneBook/loading/loaderSelectors";

class PhoneBook extends Component {
  async componentDidMount() {
    this.props.addALLContactOptions();
  }

  addContact = async (contact) => {
    if (this.props.items.some(({ name }) => name === contact.name)) {
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

  render() {
    return (
      <>
        <div className="flex flex-col h-screen bg-gray-100">
          <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div
              className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
            >
              <ToastContainer />
              <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Phonebook
              </h1>

              <Form addContact={this.addContact} />
              <ClientsFilter
                setFilter={this.setFilter}
                filter={this.props.filter}
              />

              <Contacts
                contacts={this.props.items}
                deleteContact={this.deleteContact}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getFilteredContacts(state),
  filter: getFilter(state),
  loader: getLoader(state),
});
const mapDispatch = {
  addALLContactOptions,
  addContactOptions,
  deleteContactOptions,
  setFilterOptions,
};
export default connect(mapStateToProps, mapDispatch)(PhoneBook);
