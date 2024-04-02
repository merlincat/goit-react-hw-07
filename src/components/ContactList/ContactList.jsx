import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectNameFilter);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
