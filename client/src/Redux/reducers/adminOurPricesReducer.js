import { SET_ADMIN_OUR_PRICES_DATA } from "../actions/adminOurPricesAction";


const initialState = {
  data: {
    pageHeader: "",
    writeUp: "",
    ivfPrices :[
        {
            id: 0,
            treatmentType: "",
            price: "",
        }
    ],
    buttomHeader: "",
    buttomContent: "",
    nextID: 1
  },
  
};

const adminOurPricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_OUR_PRICES_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminOurPricesReducer;

