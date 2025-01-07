import { SET_FAQ_DATA } from "../actions/faqAction";



const initialState = {
  data: null,
  
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAQ_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default faqReducer;

