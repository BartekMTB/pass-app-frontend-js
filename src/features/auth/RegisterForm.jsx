import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "./authApiSlice";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(isLoading);
    try {
      const user = await signup({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }).unwrap();
      console.log(user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.regform}>
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
