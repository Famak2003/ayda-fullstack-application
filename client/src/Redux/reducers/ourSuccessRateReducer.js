import { SET_OUR_SUCCESS_RATE_DATA } from "../actions/ourSuccessRateAction";


const initialState = {
  data: null,
  
};

const ourSuccessRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OUR_SUCCESS_RATE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ourSuccessRateReducer;

