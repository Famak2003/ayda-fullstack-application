import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

// Persist configuration
const persistConfig = {
    key: "auth", // Key for localStorage (can be customized)
    storage, // Storage mechanism (localStorage)
  };


const authPersistedReducer = persistReducer(persistConfig, authReducer);

const AppReducers = combineReducers({
    home: homeReducer,
    auth: authPersistedReducer
    }
);
export default AppReducers