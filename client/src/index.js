import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// persistor.purge()


root.render(
  // <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={<div>...Loading</div>} persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);