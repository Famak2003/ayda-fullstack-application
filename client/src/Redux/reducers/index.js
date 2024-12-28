import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import persistedReducer from "./persistedReducer";

// Persist configurations start //
const authPersistConfig = {
  key: "auth", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const persistConfig = {
  key: "auth", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

// Persist configurations end //



const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const genPersistedReducer = persistReducer(persistConfig, persistedReducer);

const AppReducers = combineReducers({
    home: homeReducer,
    auth: authPersistedReducer,
    persist: genPersistedReducer
    }
);




export default AppReducers