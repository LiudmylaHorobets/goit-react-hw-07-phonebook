import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

export const ContactForm = ({ handleAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userContact = {
      id: nanoid(),
      ...formData,
    };

    handleAddContact(userContact);
    setFormData({ name: '', number: '' });
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <p>Name</p>
        <input
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.formInput}
        />
      </label>
      <label className={css.label}>
        <p>Number</p>
        <input
          type="tel"
          value={formData.number}
          onChange={handleInputChange}
          name="number"
          placeholder="459-12-56"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
        />
      </label>
      <button className={css.buttonForm}>Add contact</button>
    </form>
  );
};
