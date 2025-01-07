import { SET_ADMIN_FAQ_DATA } from "../actions/adminFAQAction";

const initialState = {
  data: {
    header: "",
    body :[
      {
        id: 0,
        header: "",
        content: ""
      }
    ],
    nextID: 1
  },
  
};

const adminFAQReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_FAQ_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminFAQReducer;
