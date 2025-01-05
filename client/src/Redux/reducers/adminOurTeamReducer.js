import { SET_ADMIN_OUR_TEAM_DATA } from "../actions/ourTeamAdminAction";

const initialState = {
    data: [
        {
            id: 0,
            header: "",
            image: "",
            content: ""
        },
        {
            id: 1,
            header: "",
            image: "",
            content: ""
        },
    ],
    
};

const adminOurTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_OUR_TEAM_DATA:
        return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default adminOurTeamReducer;
