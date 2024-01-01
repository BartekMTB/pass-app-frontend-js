import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filters/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  //console.log(useSelector(state => state.filter));
  return (
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      // value={filter}
      onChange={handleFilterChange}
    />
  );
};
