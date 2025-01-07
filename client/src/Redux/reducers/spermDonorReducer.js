import { SET_SPERM_DONOR_DATA } from "../actions/spermDonorAction";


const initialState = {
  data: null,
  
};

const spermDonorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPERM_DONOR_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default spermDonorReducer;

