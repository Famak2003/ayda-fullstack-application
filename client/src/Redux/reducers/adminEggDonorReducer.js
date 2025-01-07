import { SET_ADMIN_EGG_DONOR_DATA } from "../actions/adminEggDonorAction";


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

const adminEggDonorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_EGG_DONOR_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminEggDonorReducer;
