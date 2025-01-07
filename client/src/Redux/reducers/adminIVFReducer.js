import { SET_ADMIN_IVF_DATA } from "../actions/adminIVFAction";


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

const adminIVFReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_IVF_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminIVFReducer;
