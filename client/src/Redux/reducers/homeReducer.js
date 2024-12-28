import { GET_ALL_HOME_CONTENT, SET_HERO_DATA, SET_QUICK_INFO_DATA } from '../actions/homeAction';

const initialState = {
  content: null,
  // quickInfoData: {
  //   content: "",
  //   header: "",
  //   subHeader: "",
  //   image: "",
  //   linksArr: [
  //       {
  //           id: 0,
  //           linkName: "",
  //           link: "",
  //       },
  //   ],
  //   nextID: 1 //counter
  // },
//   heroData: {
//     content: [
//         {
//             id: 0,
//             header: "",
//             subHeader: "",
//             image: "",
//             start: "",
//             stop: "",
//         },
//     ],
//     nextID: 1, // counter
// },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOME_CONTENT:
      return { ...state, content: action.payload };
    // case SET_QUICK_INFO_DATA:
    //       return { ...state, quickInfoData: action.payload };
    // case SET_HERO_DATA:
    //       return { ...state, heroData: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
