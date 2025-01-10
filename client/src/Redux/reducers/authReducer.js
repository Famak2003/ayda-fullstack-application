import { IS_AUTHENTICATED, IS_EMAIL_VERIFIED, IS_OTP_VERIFIED } from '../actions/authAction';

const initialState = {
  isAuthenticated: false,
  isEmailVerified: null,
  isOTPVerified: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case IS_EMAIL_VERIFIED:
      return { ...state, isEmailVerified: action.payload };
    case IS_OTP_VERIFIED:
      return { ...state, isOTPVerified: action.payload };
    default:
      return state;
  }
};

export default authReducer;
