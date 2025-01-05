import { SET_ADMIN_WHY_US_DATA } from '../actions/adminWhyusAction';

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

const adminWhyusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_WHY_US_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminWhyusReducer;
