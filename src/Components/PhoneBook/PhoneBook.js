import React, { Component } from "react";
import Contacts from "./Contacts/Contacts";
import ClientsFilter from "./Form/Filter/filter";
import Form from "./Form/Form";
// import { v4 as id } from "uuid";
import { PhoneBookWrapper } from "./phoneBookStyled";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = `https://test-35238-default-rtdb.firebaseio.com/`;
const BASE = `phoneBook.json`;
class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(URL + BASE);
      if (data) {
        const contacts = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        this.setState({ contacts });
      } else return;
    } catch (error) {toast.error(`☠️${error}, oh damn it 404!!`);}
  }

  addContact = async (contact) => {
    try {
      if (this.state.contacts.some(({ name }) => name === contact.name)) {
        // alert(`${contact.name}, is already in contacts!`);
        toast.warn(`🦄${contact.name}, is already in contacts!`);
      } else {
        const { data } = await axios.post(URL + BASE, contact);
        this.setState((prevState) => ({
          contacts: [...prevState.contacts, { ...contact, id: data.name }],
        }));
      }
    } catch (error) {toast.error(`☠️${error}, oh damn it 404!!`)}
  };

  deleteContact = async (e) => {
    const { id } = e.target;

    try {
      await axios.delete(URL + `phoneBook/${id}.json`);
      this.setState({
        contacts: this.state.contacts.filter((contact) => contact.id !== id),
      });
    } catch (error) {toast.error(`☠️${error}, oh damn it 404!!`);}
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
        <ToastContainer />
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
