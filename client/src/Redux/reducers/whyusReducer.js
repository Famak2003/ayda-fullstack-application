import { SET_WHY_US_DATA } from "../actions/whyusAction";


const initialState = {
  data: null,
  
};

const whyusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHY_US_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default whyusReducer;

