import { SET_OVARIAN_PRP_DATA } from "../actions/ovarianPRPAction";


const initialState = {
  data: null,
  
};

const ovarianPRPReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OVARIAN_PRP_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ovarianPRPReducer;

