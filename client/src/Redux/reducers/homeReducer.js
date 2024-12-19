import { GET_ALL_HOME_CONTENT } from '../actions/homeAction';

const initialState = {
  content: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOME_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
