import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import AppReducers from './reducers';
import { thunk } from 'redux-thunk';
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: AppReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore redux-persist actions
      },
  }).concat(thunk),
});

// Persistor object to handle persistence
const persistor = persistStore(store);

export { store, persistor };