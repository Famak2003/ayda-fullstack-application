import { SET_ADMIN_OVARIAN_PRP_DATA } from "../actions/adminOvarianPRPAction";


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

const adminOvarianPRPReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_OVARIAN_PRP_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminOvarianPRPReducer;
