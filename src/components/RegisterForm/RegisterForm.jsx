import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.regform}>
      <label className={css.reglabel}>
        Username
        <input type="text" name="name" className={css.reginput} />
      </label>
      <label className={css.reglabel}>
        Email
        <input type="email" name="email" className={css.reginput} />
      </label>
      <label className={css.reglabel}>
        Password
        <input type="password" name="password" className={css.reginput} />
      </label>
      <button type="submit" className={css.regbutton}>
        Register
      </button>
    </form>
  );
};
