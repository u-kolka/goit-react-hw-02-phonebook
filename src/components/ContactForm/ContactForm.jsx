import React, {Component} from "react";
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";

class ContactForm extends Component {
      
    state = {
    name: '',
    number: '',
    };

    nameInputId = nanoid(7);
    numberInputId = nanoid(7);

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    };
  
    handleSabmit = event => {
        event.preventDefault();
        this.state.id = nanoid(7);
        this.props.onFormSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    };

    
    render() {

    return (
        <form onSubmit={this.handleSabmit}>
            
        <label htmlFor={this.nameInputId}> Name
          <input onChange={this.handleChange} 
                type="text"
                name="name"
                value={this.state.name}
                id={this.nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
      />
        </label>
        <label htmlFor={this.numberInputId}> Number
            <input onChange={this.handleChange}
                type="tel"
                name="number"
                value={this.state.number}
                id={this.numberInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                ></input>
        </label>
        <button type='submit'>Add contact</button>
      </form>
    )}
}

export default ContactForm;