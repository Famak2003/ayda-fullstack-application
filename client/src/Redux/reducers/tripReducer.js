import { SET_TRIP_DATA } from "../actions/tripAction";


const initialState = {
  data: null,
  
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIP_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default tripReducer;