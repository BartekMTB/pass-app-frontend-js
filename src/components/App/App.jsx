import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { LayoutPage } from '../LayoutPage/LayoutPage';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

const HomePage = lazy(() => import('../../pages/HomePage/homePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/registerPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/loginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactPage/contactPage'));
const PassesPage = lazy(() => import('../../pages/PassesPage/passesPage'));



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
        <Route path="/passes" element={<PassesPage />} />
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
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

