import React, { Component } from "react";
import { connect } from "react-redux";
import { resetError } from "../../../redux/phoneBook/error/erorAction";
import { getError } from "../../../redux/phoneBook/error/errorSelectors";
import { FormWrapper } from "./formStyled";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandlerSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
  };
  onHandlerChange = (e) => {
    this.props.error && this.props.resetError();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormWrapper onSubmit={this.onHandlerSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onHandlerChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onHandlerChange}
          />
        </label>

        <button type="submit">ADD CONTACT</button>
      </FormWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: getError(state),
  };
};

export default connect(mapStateToProps, { resetError })(Form);
