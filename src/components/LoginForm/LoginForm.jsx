import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label className={css.formlabel}>
        Email
        <input type="email" name="email" className={css.formInput} />
      </label>
      <label className={css.formlabel}>
        Password
        <input type="password" name="password" className={css.formInput} />
      </label>
      <button type="submit" className={css.formBtn}>
        Log In
      </button>
    </form>
  );
};
