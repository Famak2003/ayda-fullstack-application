import { SET_EMBRYO_DONOR_DATA } from "../actions/embryoDonorAction";


const initialState = {
  data: null,
  
};

const embryoDonorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMBRYO_DONOR_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default embryoDonorReducer;

