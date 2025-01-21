import { SET_IS_RECAPTCHA_VERIFIED } from "../actions/contactUsAction";

const initialState = {
  isRecaptchaVerified: null,
};

const contactUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_RECAPTCHA_VERIFIED:
      return { ...state, isRecaptchaVerified: action.payload };
    default:
      return state;
  }
};

export default contactUsReducer;
