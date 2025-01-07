import { SET_ACUPUNCTURE_DATA } from "../actions/acupunctureAction";


const initialState = {
  data: null,
  
};

const acupunctureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACUPUNCTURE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default acupunctureReducer;

