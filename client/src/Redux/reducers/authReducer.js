import { IS_AUTHENTICATED } from '../actions/authAction';

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
};

export default authReducer;
