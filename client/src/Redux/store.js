import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import AppReducers from './reducers';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

// Persist configuration
const persistConfig = {
    key: "root", // Key for localStorage (can be customized)
    storage, // Storage mechanism (localStorage)
  };

  // Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, AppReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore redux-persist actions
      },
  }).concat(thunk),
});

// Persistor object to handle persistence
const persistor = persistStore(store);

export { store, persistor };