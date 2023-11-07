import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        const { id, name, phone } = contact;
        return (
          <li className={css.contactsList} key={id}>
            <span className={css.contactsListName}>{name}:</span>
            <span className={css.contactsListNumber}>{phone}</span>
            <button
              className={css.buttonDelete}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
