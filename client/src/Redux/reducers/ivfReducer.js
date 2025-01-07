import { SET_IVF_DATA } from "../actions/ivfAction";


const initialState = {
  data: null,
  
};

const ivfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IVF_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ivfReducer;

