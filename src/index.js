import React from 'react';
import ReactDOM from 'react-dom/client';
//import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
//import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import  PassesHome  from './pages/PassesPage/passesPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     
        <BrowserRouter basename="/pass-app-frontend-js">
          <PassesHome />
        </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);


/* import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/pass-app-frontend-js">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
); */