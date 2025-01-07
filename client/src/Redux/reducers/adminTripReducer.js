import { SET_ADMIN_TRIP_DATA } from "../actions/adminTripAction";

const initialState = {
  data: {
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

const adminTripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_TRIP_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminTripReducer;
