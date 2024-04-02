import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import css from './App.module.css';

const App = () => {
  // const visibleContcats = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(searchBarFilter.toLowerCase())
  // );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;

// Додавати новий контакт
// Видаляти контакт
// Змінити значення фільтру контактів

// Стор заміна useState
// При екшн - діспат екшн, відправтии в стор, обробити редюсером

// 1. Оголосити стор - один раз в App
// 2. Оголосити стан
// 3. Використати стан в jsx
// 4. Оголосити екшн
// 5. Відправити екшн при події
// 6. Обробити екшн в редюсері
