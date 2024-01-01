import { configureStore  } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
//import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
//import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filters/filtersSlice';
//import { authReducer } from './auth_tmp/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiPasses } from './passes/apiPasses' //apiPases are like slices have integrted reducers
//import { apiAuth } from './auth/apiAuth';

/* const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}; */

export const store = configureStore({
  reducer: {
    //auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer,
    [apiPasses.reducerPath]: apiPasses.reducer,
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPasses.middleware),
 
  /* getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }) */
  //devTools: process.env.NODE_ENV === 'development',
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export const persistor = persistStore(store);
export const RootState = state => state;
/* export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector */