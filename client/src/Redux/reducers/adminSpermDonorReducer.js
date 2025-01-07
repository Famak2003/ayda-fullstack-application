import { SET_ADMIN_SPERM_DONOR_DATA } from "../actions/adminSpermDonorAction";


const initialState = {
  data: {
    body :[
      {
        id: 0,
        header: "",
        content: ""
      }
    ],
    writeUp: "",
    nextID: 1
  },
  
};

const adminSpermDonorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_SPERM_DONOR_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminSpermDonorReducer;
