import { IS_AUTHENTICATED, IS_EMAIL_VERIFIED, IS_OTP_VERIFIED, SET_PROFILE, SET_PRTMISSION, SET_USER_ID } from '../actions/authAction';

const initialState = {
  isAuthenticated: false,
  isEmailVerified: null,
  isOTPVerified: false,
  permission: 'admin',
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case IS_EMAIL_VERIFIED:
      return { ...state, isEmailVerified: action.payload };
    case IS_OTP_VERIFIED:
      return { ...state, isOTPVerified: action.payload };
    case SET_PRTMISSION:
      return { ...state, permission: action.payload };
    case SET_USER_ID:
      return { ...state, userInfo: {...state.userInfo, userID: action.payload} };
    case SET_PROFILE:
      return { ...state, userInfo: {...state.userInfo, ...action.payload} };
      
    default:
      return state;
  }
};

export default authReducer;
