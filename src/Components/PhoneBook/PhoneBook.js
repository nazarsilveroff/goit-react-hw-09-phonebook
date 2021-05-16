import React, { Component } from "react";
import Contacts from "./Contacts/Contacts";
import ClientsFilter from "./Form/Filter/filter";
import Form from "./Form/Form";
import { PhoneBookWrapper } from "./phoneBookStyled";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import {
  addALLContact,
  addContact,
  deleteContact,
} from "../../redux/phoneBook/items/itemsAction";
import { setFilter } from "../../redux/phoneBook/filter/filterAction";

const URL = `https://test-35238-default-rtdb.firebaseio.com/`;
const BASE = `phoneBook.json`;
class PhoneBook extends Component {
  async componentDidMount() {
    try {
      const { data } = await axios.get(URL + BASE);
      if (data) {
        const contacts = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        this.props.addALLContact(contacts);
        // this.setState({ contacts });
      } else return;
    } catch (error) {
      toast.error(`☠️${error}, oh damn it 404!!`);
    }
  }

  addContact = async (contact) => {
    try {
      if (this.props.contacts.items.some(({ name }) => name === contact.name)) {
        toast.warn(`🦄${contact.name}, is already in contacts!`);
      } else {
        const { data } = await axios.post(URL + BASE, contact);
        this.props.addContact({ ...contact, id: data.name });
        // this.setState((prevState) => ({
        //   contacts: [...prevState.contacts, { ...contact, id: data.name }],
        // }));
      }
    } catch (error) {
      toast.error(`☠️${error}, oh damn it 404!!`);
    }
  };

  deleteContact = async (e) => {
    const { id } = e.target;

    try {
      await axios.delete(URL + `phoneBook/${id}.json`);
      this.props.deleteContact(id);
      // this.setState({
      //   contacts: this.state.contacts.filter((contact) => contact.id !== id),
      // });
    } catch (error) {
      toast.error(`☠️${error}, oh damn it 404!!`);
    }
  };
  setFilter = (e) => {
    const { value } = e.target;
    this.props.setFilter(value);
    // this.setState({ filter: value });
  };
  getFilteredContacts = () => {
    return this.props.contacts.items?.filter((contact) =>
      contact.name
        .toLowerCase()
        .includes(this.props.contacts.filter?.toLowerCase())
    );
  };

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
        <Contacts
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </PhoneBookWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: {
    items: state.contacts.items,
    filter: state.contacts.filter,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addALLContact: (items) => {
      dispatch(addALLContact(items));
    },
    addContact: (items) => {
      dispatch(addContact(items));
    },
    deleteContact: (items) => {
      dispatch(deleteContact(items));
    },
    setFilter: (filter) => {
      dispatch(setFilter(filter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
