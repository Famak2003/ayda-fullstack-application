import { SET_EGG_DONOR_DATA } from "../actions/eggDonorAction";


const initialState = {
  data: null,
  
};

const eggDonorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EGG_DONOR_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default eggDonorReducer;

