import { SET_ADMIN_ACUPUNCTURE_DATA } from "../actions/adminAcupunctureAction";


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

const adminAcupunctureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_ACUPUNCTURE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminAcupunctureReducer;
