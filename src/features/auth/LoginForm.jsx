import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(isLoading);
    try {
      const user = await login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }).unwrap();

      dispatch(setCredentials(user));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
