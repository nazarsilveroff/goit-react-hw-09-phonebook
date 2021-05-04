import React, { Component } from "react";
import Contacts from "./Contacts/Contacts";
import ClientsFilter from "./Form/Filter/filter";
import Form from "./Form/Form";
import { v4 as id } from "uuid";
import { PhoneBookWrapper } from "./phoneBookStyled";
class PhoneBook extends Component {
  state = {
    contacts: [
      { id: id(), name: "Rosie Simpson", number: "459-12-56" },
      { id: id(), name: "Hermione Kline", number: "443-89-12" },
      { id: id(), name: "Eden Clements", number: "645-17-79" },
      { id: id(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    this.state.contacts.some(({ name }) => name === contact.name)
      ? alert(`${contact.name}, is already in contacts!`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, { ...contact, id: id() }],
        }));
  };

  deleteContact = (e) => {
    const { id } = e.target;
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };
  setFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  getFilteredContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <PhoneBookWrapper>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
        <ClientsFilter setFilter={this.setFilter} filter={this.state.filter} />
        <Contacts
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </PhoneBookWrapper>
    );
  }
}

export default PhoneBook;
