

import { SET_ADMINS_DATA } from "../actions/adminsAction";
import { SET_ADMIN_SPERM_DONOR_DATA } from "../actions/adminSpermDonorAction";


const initialState = {
  data: [],
  
};

const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMINS_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminsReducer;
