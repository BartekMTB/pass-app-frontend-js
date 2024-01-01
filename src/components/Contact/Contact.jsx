import PropTypes from 'prop-types';
import css from './contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';

import { useDispatch } from 'react-redux';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactsItem}>
      {name} {number}{' '}
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        remove
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
