import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li className={css.contactsList} key={id}>
            <span className={css.contactsListName}>{name}:</span>
            <span className={css.contactsListNumber}>{number}</span>
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
