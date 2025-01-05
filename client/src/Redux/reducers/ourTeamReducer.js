import { SET_OUR_TEAM_DATA } from "../actions/ourTeamAction";


const initialState = {
  data: null,
  
};

const ourTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OUR_TEAM_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ourTeamReducer;



