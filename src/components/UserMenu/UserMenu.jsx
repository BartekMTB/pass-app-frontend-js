import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.main}>
      <p className={css.text}>{user.email} </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.Btn}
      >
        Logout
      </button>
    </div>
  );
};
