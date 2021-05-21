import React, { Component } from "react";
import { connect } from "react-redux";
import { resetError } from "../../../redux/phoneBook/error/erorAction";
import { getError } from "../../../redux/phoneBook/error/errorSelectors";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandlerSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: "", number: "" });
  };
  onHandlerChange = (e) => {
    this.props.error && this.props.resetError();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="mt-10" onSubmit={this.onHandlerSubmit}>
        <label className="block text-xs font-semibold text-gray-600 uppercase">
          Name
          <input
            className="block w-full text-base py-1 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onHandlerChange}
          />
        </label>
        <label className="block text-xs font-semibold text-gray-600 uppercase">
          Phone
          <input
            className="block w-full  text-base py-1 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onHandlerChange}
          />
        </label>

        <button
          className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
          type="submit"
        >
          ADD CONTACT
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: getError(state),
  };
};

export default connect(mapStateToProps, { resetError })(Form);
