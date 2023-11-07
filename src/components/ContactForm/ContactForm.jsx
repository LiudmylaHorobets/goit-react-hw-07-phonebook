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
          className={css.formInput}
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="nameId"
        />
      </label>
      <label className={css.label}>
        <p className={css.labelTitle}>Number</p>
        <input
          className={css.formInput}
          type="tel"
          name="number"
          placeholder="459-12-56"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="numberId"
        />
      </label>
      <button className={css.buttonForm}>Add contact</button>
    </form>
  );
};
