import { SET_ADMIN_OUR_SUCCESS_RATE_DATA } from "../actions/adminOurSuccessRateAction";


const initialState = {
  data: {
    pageHeader: "",
    ivfDetails :[
        {
            id: 0,
            age: "",
            ivf: "",
            spermDonor: "",
            eggDonor: "",
            embryoDonor: ""
        }
    ],
    writeUp: "",
    body: [
        {
            id: 0,
            header: "",
            content: ""
        }
    ],
    nextID: 1
  },
  
};

const adminOurSuccessRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_OUR_SUCCESS_RATE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminOurSuccessRateReducer;

