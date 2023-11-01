// import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Filter } from './Filter/Filter.jsx';

import { useSelector, useDispatch } from 'react-redux';
import {
  addContacts,
  deleteContacts,
  filterContacts,
} from 'redux/contactSlice.js';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const handleAddContact = userContacts => {
    if (!userContacts.name) {
      return;
    }

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase()
      )
    ) {
      alert(`${userContacts.name} is already in contacts`);
      return;
    }
    dispatch(addContacts(userContacts));
  };

  const handleDelete = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(filterContacts(newFilter));
  };

   const getContactFromFilter = () => {
    if (typeof filter !== 'string') {
      return contacts;
    }
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2 className={css.title}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          <ContactsList
            contacts={getContactFromFilter()}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <p className={css.titleNotification}>
          Your phonebook is empty. Add first contact!
        </p>
      )}
    </div>
  );
};
