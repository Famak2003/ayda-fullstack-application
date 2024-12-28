import { SET_GREETINGS_DATA, SET_HERO_DATA, SET_QUICK_INFO_DATA } from "../actions/homeAction";

const initialState = {
    greetingsData: {},
    heroData: {
        content: [
            {
                id: 0,
                header: "",
                subHeader: "",
                image: "",
                start: "",
                stop: "",
            },
        ],
        nextID: 1, // counter
    },
    quickInfoData: {
        content: "",
        header: "",
        subHeader: "",
        image: "",
        linksArr: [
            {
                id: 0,
                linkName: "",
                link: "",
            },
        ],
        nextID: 1 // counter
      },
};

const persistedReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_GREETINGS_DATA:
        return { ...state, greetingsData: action.payload };
     case SET_HERO_DATA:
        return { ...state, heroData: action.payload };
    case SET_QUICK_INFO_DATA:
        return { ...state, quickInfoData: action.payload };
    default:
      return state;
  }
};

export default persistedReducer;
