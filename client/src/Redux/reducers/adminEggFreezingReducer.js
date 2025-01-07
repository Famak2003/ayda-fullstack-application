import { SET_ADMIN_EGG_FREEZING_DATA } from "../actions/adminEggFreezingAction";


const initialState = {
  data: {
    headerWriteUP: "",
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

const adminEggFreezingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_EGG_FREEZING_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminEggFreezingReducer;
