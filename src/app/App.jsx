import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { LayoutPage } from '../components/LayoutPage/LayoutPage';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage'));
const PassesPage = lazy(() => import('../pages/PassesPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/passes" component={<LoginPage />} />
          }
        />
        <Route
          path="/passes"
          element={
            <PrivateRoute redirectTo="/login" component={<PassesPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

/* import css from './app.module.css';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.main_div}>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />

      <ContactList></ContactList>
    </div>
  );
};
 */