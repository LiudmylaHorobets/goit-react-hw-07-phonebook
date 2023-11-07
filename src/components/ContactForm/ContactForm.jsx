import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { selectItems } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = e => {
    e.preventDefault();

    const nameInput = e.currentTarget.elements.name;
    const numberInput = e.currentTarget.elements.number;

    const contactName = nameInput.value;
    const contactPhone = numberInput.value;

    if (!contactName || !contactPhone) {
      alert('Please fill in both name and phone fields');
      return;
    }

    if (contacts.some(contact => contact.name === contactName)) {
      alert(`${contactName} is already in contacts`);
      return;
    }

    const newContact = {
      name: contactName,
      phone: contactPhone,
    };

    dispatch(addContact(newContact));

    nameInput.value = '';
    numberInput.value = '';
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <p className={css.labelTitle}>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
          className={css.formInput}
        />
      </label>
      <label className={css.label}>
        <p className={css.labelTitle}>Number</p>
        <input
          type="tel"
          name="number"
          placeholder="459-12-56"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
        />
      </label>
      <button className={css.buttonForm}>Add contact</button>
    </form>
  );
};
