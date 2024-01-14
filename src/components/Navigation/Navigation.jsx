import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <div>
          <NavLink to="/passes" className={css.link}>
            Passes
          </NavLink>
          <NavLink to="/newpass" className={css.link}>
            New
          </NavLink>
        </div>
      )}
    </nav>
  );
};
