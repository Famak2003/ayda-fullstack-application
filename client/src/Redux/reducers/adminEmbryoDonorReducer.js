import { SET_ADMIN_EMBRYO_DONOR_DATA } from "../actions/adminEmbryoDonorAction";


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

const adminEmbryoDonorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_EMBRYO_DONOR_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminEmbryoDonorReducer;
