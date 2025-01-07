import { SET_ABOUT_US_DROPDOWN, SET_TREATMENT_DROPDOWN } from "../actions/dashboardAction";



const initialState = {
  aboutUsDropDown: false,
  treatmentDropDown: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ABOUT_US_DROPDOWN:
      return { ...state, aboutUsDropDown: action.payload };
    case SET_TREATMENT_DROPDOWN:
      return { ...state, treatmentDropDown: action.payload };
    default:
      return state;
  }
};

export default dashboardReducer;
