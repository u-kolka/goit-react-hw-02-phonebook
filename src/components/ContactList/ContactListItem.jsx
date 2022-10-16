import React from 'react';
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, onDeleteContact } ) => {
    return (
        <li>
            <p>{name}: {number}</p>
            <button onClick={() => onDeleteContact()}>Удалить</button>
        </li>
    );
};

ContactListItem.propTypes = {
    //   id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
}


export default ContactListItem;