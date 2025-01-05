import { SET_OUR_PRICES_DATA } from "../actions/ourPricesAction";


const initialState = {
  data: null,
  
};

const ourPricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OUR_PRICES_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ourPricesReducer;

