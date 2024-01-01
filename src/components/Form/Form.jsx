import css from './Form.module.css';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const ContactsArray = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value || '',
    };

    if (ContactsArray.map(el => el.name).includes(form.elements.name.value))
      alert(`${form.elements.name.value} is already in contacts`);
    else dispatch(addContact(contact));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[A-Za-z.'\- ]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone</label>
      <input
        className={css.formInput}
        type="tel"
        name="number"
        pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.formBtn}>Add contacts</button>
    </form>
  );
};
