import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import adminWhyusReducer from "./adminWhyusReducer";
import adminOurTeamReducer from "./adminOurTeamReducer";
import adminOurPricesReducer from "./adminOurPricesReducer";
import adminOurSuccessRateReducer from "./adminOurSuccessRateReducer";
import adminHomeReducer from "./adminHomeReducer";
import ourPricesReducer from "./ourPricesReducer";
import whyusReducer from "./whyusReducer";
import ourTeamReducer from "./ourTeamReducer";
import ourSuccessRateReducer from "./ourSuccessRateReducer";


// Persist configurations start //

const authPersistConfig = {
  key: "auth", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminHomePersistConfig = {
  key: "home", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminWhyusPersistConfig = {
  key: "whyus", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminOurTeamPersistConfig = {
  key: "ourTeam", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminOurPricesPersistConfig = {
  key: "ourPrices", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminOurSuccessRatePersistConfig = {
  key: "ourSuccessRate", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};


// Persist configurations end //



const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const adminWhyusPersistedReducer = persistReducer(adminWhyusPersistConfig, adminWhyusReducer);
const adminHomePersistedReducer = persistReducer(adminHomePersistConfig, adminHomeReducer);
const adminOurTeamPersistedReducer = persistReducer(adminOurTeamPersistConfig, adminOurTeamReducer);
const adminOurPricesPersistedReducer = persistReducer(adminOurPricesPersistConfig, adminOurPricesReducer);
const adminOurSuccessRatePersistedReducer = persistReducer(adminOurSuccessRatePersistConfig, adminOurSuccessRateReducer);


const AppReducers = combineReducers(
  {
    home: homeReducer,
    whyus: whyusReducer,
    ourTeam: ourTeamReducer,
    ourPrices: ourPricesReducer,
    ourSuccessRate: ourSuccessRateReducer,
    auth: authPersistedReducer,
    adminHome: adminHomePersistedReducer,
    adminWhyus: adminWhyusPersistedReducer,
    adminOurTeam: adminOurTeamPersistedReducer,
    adminOurPrices: adminOurPricesPersistedReducer,
    adminOurSuccessRate: adminOurSuccessRatePersistedReducer
  }
);




export default AppReducers