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
import adminFAQReducer from "./adminFAQReducer";
import faqReducer from "./faqReducer";
import adminTripReducer from "./adminTripReducer";
import tripReducer from "./tripReducer";
import adminIVFReducer from "./adminIVFReducer";
import ivfReducer from "./ivfReducer";
import adminEggDonorReducer from "./adminEggDonorReducer";
import eggDonorReducer from "./eggDonorReducer";
import adminEmbryoDonorReducer from "./adminEmbryoDonorReducer";
import embryoDonorReducer from "./embryoDonorReducer";
import adminSpermDonorReducer from "./adminSpermDonorReducer";
import spermDonorReducer from "./spermDonorReducer";
import adminEggFreezingReducer from "./adminEggFreezingReducer";
import adminOvarianPRPReducer from "./adminOvarianPRPReducer";
import adminAcupunctureReducer from "./adminAcupunctureReducer";
import ovarianPRPReducer from "./ovarianPRPReducer";
import eggFreezingReducer from "./eggFreezingReducer";
import acupunctureReducer from "./acupunctureReducer";
import dashboardReducer from "./dashboardReducer";
import adminsReducer from "./adminsReducer";


// Persist configurations start //

const dashboardPersistConfig = {
  key: "dashboard", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

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

const adminIVFPersistConfig = {
  key: "ivf", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminEggDonorPersistConfig = {
  key: "eggDonor", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminEggFreezingPersistConfig = {
  key: "eggFreezing", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminSpermDonorPersistConfig = {
  key: "spermDonor", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminEmbryoDonorPersistConfig = {
  key: "embryoDonor", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminOvarianPRPPersistConfig = {
  key: "ovarianPRP", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminAcupuncturePersistConfig = {
  key: "acupuncture", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminTripPersistConfig = {
  key: "trip", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

const adminFAQPersistConfig = {
  key: "faq", // Key for localStorage (can be customized)
  storage, // Storage mechanism (localStorage)
};

// Persist configurations end //



const dashboardPersistedReducer = persistReducer(dashboardPersistConfig, dashboardReducer); 
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const adminWhyusPersistedReducer = persistReducer(adminWhyusPersistConfig, adminWhyusReducer);
const adminHomePersistedReducer = persistReducer(adminHomePersistConfig, adminHomeReducer);
const adminOurTeamPersistedReducer = persistReducer(adminOurTeamPersistConfig, adminOurTeamReducer);
const adminOurPricesPersistedReducer = persistReducer(adminOurPricesPersistConfig, adminOurPricesReducer);
const adminOurSuccessRatePersistedReducer = persistReducer(adminOurSuccessRatePersistConfig, adminOurSuccessRateReducer);
const adminIVFPersistedReducer = persistReducer(adminIVFPersistConfig, adminIVFReducer);
const adminEggDonorPersistedReducer = persistReducer(adminEggDonorPersistConfig, adminEggDonorReducer);
const adminSpermDonorPersistedReducer = persistReducer(adminSpermDonorPersistConfig, adminSpermDonorReducer);
const adminEmbryoDonorPersistedReducer = persistReducer(adminEmbryoDonorPersistConfig, adminEmbryoDonorReducer);
const adminEggFreezingPersistedReducer = persistReducer(adminEggFreezingPersistConfig, adminEggFreezingReducer);
const adminOvarianPRPPersistedReducer = persistReducer(adminOvarianPRPPersistConfig, adminOvarianPRPReducer);
const adminAcupuncturePersistedReducer = persistReducer(adminAcupuncturePersistConfig, adminAcupunctureReducer);
const adminTripPersistedReducer = persistReducer(adminTripPersistConfig, adminTripReducer);
const adminFAQPersistedReducer = persistReducer(adminFAQPersistConfig, adminFAQReducer);


const AppReducers = combineReducers(
  {
    home: homeReducer,
    whyus: whyusReducer,
    ourTeam: ourTeamReducer,
    ourPrices: ourPricesReducer,
    ourSuccessRate: ourSuccessRateReducer,
    ivf: ivfReducer,
    eggDonor: eggDonorReducer,
    spermDonor: spermDonorReducer,
    embryoDonor: embryoDonorReducer,
    ovarianPRP: ovarianPRPReducer,
    eggFreezing: eggFreezingReducer,
    acupuncture: acupunctureReducer,
    trip: tripReducer,
    faq: faqReducer,
    dashboard: dashboardPersistedReducer,
    auth: authPersistedReducer,
    admins: adminsReducer,
    adminHome: adminHomePersistedReducer,
    adminWhyus: adminWhyusPersistedReducer,
    adminOurTeam: adminOurTeamPersistedReducer,
    adminOurPrices: adminOurPricesPersistedReducer,
    adminOurSuccessRate: adminOurSuccessRatePersistedReducer,
    adminIVF: adminIVFPersistedReducer,
    adminEggDonor: adminEggDonorPersistedReducer,
    adminSpermDonor: adminSpermDonorPersistedReducer,
    adminEmbryoDonor: adminEmbryoDonorPersistedReducer,
    adminEggFreezing: adminEggFreezingPersistedReducer,
    adminOvarianPRP: adminOvarianPRPPersistedReducer,
    adminAcupuncture: adminAcupuncturePersistedReducer,
    adminFAQ: adminFAQPersistedReducer,
    adminTrip: adminTripPersistedReducer,
  }
);




export default AppReducers