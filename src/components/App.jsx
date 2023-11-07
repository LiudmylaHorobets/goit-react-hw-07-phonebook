import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, filterContacts } from 'redux/contactSlice';
import { selectFilter, selectItems } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Filter } from './Filter/Filter.jsx';

import css from './App.module.css';

// export const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const contacts = useSelector(selectItems);
//   const filter = useSelector(selectFilter);

//   const handleFilterChange = e => {
//     const newFilter = e.target.value;
//     dispatch(filterContacts(newFilter));
//   };

//   const getContactFromFilter = () => {
//     if (typeof filter !== 'string') {
//       return contacts;
//     }
//     const filteredContacts = contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return filteredContacts;
//   };

//   return (
//     <div className={css.phonebook}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={css.title}>Contacts</h2>
//       {contacts.length > 0 ? (
//         <>
//           <Filter filter={filter} handleFilterChange={handleFilterChange} />
//           <ContactsList contacts={getContactFromFilter()} />
//         </>
//       ) : (
//         <p className={css.titleNotification}>
//           Your phonebook is empty. Add your first contact!
//         </p>
//       )}
//     </div>
//   );
// };

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(filterContacts(newFilter));
  };

  const getContactFromFilter = () => {
    if (typeof filter !== 'string') {
      return contacts;
    }
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          <ContactsList contacts={getContactFromFilter()} />
        </>
      ) : (
        <p className={css.titleNotification}>
          Your phonebook is empty. Add your first contact!
        </p>
      )}
    </div>
  );
};