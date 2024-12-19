import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";

const AppReducers = combineReducers({
    home: homeReducer,
    auth: authReducer
    }
);
export default AppReducers