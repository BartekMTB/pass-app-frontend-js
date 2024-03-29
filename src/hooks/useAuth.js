import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsLoggedIn,
 // selectIsRefreshing,
} from '../features/auth/authSlice';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 // const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectCurrentUser);

  return {
    isLoggedIn,
   // isRefreshing,
    user,
  };
};
