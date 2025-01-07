import { SET_EGG_FREEZING_DATA } from "../actions/eggFreezingAction";



const initialState = {
  data: null,
  
};

const eggFreezingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EGG_FREEZING_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default eggFreezingReducer;

