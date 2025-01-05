import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";


export const SET_ADMIN_HOME_DATA = "SET_ADMIN_HOME_DATA"
export const SET_HERO_DATA = "SET_HERO_DATA"
export const SET_QUICK_INFO_DATA = "SET_QUICK_INFO_DATA"
export const SET_GREETINGS_DATA = "SET_GREETINGS_DATA"


export const setAdminHomeContent = (pageName, type, data) => async (dispatch) => {
    try {
      const res = await axiosInstance.post("/pages/home", {pageName, type, content: data})
      console.log(res)
      toast.success("upload complete")
    } catch (error) {
        console.log("There was an error when loggin out", error)
    }
  };
  
  
  
  export const getAdminHomeContent = () => async(dispatch) => {
        try {
            let heroParsedData 
            let greetingsParsedData 
            let quickInfoParsedData 
            const res = await axiosInstance.get('/pages/home')
            const content = res?.data
            content?.filter((item) => { // Parsing data respectively to the sections in home page
                if (item.type === "hero"){
                    return heroParsedData = item ? JSON.parse(item?.content) : ""
                }
                if (item.type === "greetings"){
                    return greetingsParsedData = item ? JSON.parse(item?.content) : ""
                }
                if (item.type === "quickInfo"){
                    return quickInfoParsedData = item ? JSON.parse(item?.content) : ""
                }}
            )
            const newHeroData = {
                content: heroParsedData[0],
                nextID: heroParsedData[1]
            }
            // spreading the refined data to their respective states
            dispatch(updateHeroData(newHeroData))
            dispatch(updateGreetingsData(greetingsParsedData))
            dispatch(updateQuickInfoData(quickInfoParsedData))
        } catch (error) {
            console.log(error)
            toast.error("Fetch Failed")
        }
  
  }


export const updateHeroData = (data) => async(dispatch) => {
    dispatch({
      type: SET_HERO_DATA,
      payload: data
    })
  }
  
  export const updateGreetingsData = (data) => async(dispatch) => {
    dispatch({
      type: SET_GREETINGS_DATA,
      payload: data
    })
  }
  
  export const updateQuickInfoData = (data) => async(dispatch) => {
    dispatch({
      type: SET_QUICK_INFO_DATA,
      payload: data
    })
  }
  

