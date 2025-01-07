import axiosInstance from "../../utilities/axiosInstance";


export const SET_EGG_FREEZING_DATA = "SET_EGG_FREEZING_DATA"
  
export const getEggFreezingContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/eggfreezing')
        const data = res?.data
        const eggFreezingParsedContent = JSON.parse(data[0].content)
        console.log("Public eggFreezing ===> ?  ", eggFreezingParsedContent)
        dispatch(updateEggFreezingData(eggFreezingParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateEggFreezingData = (data) => async(dispatch) => {
  dispatch({
    type: SET_EGG_FREEZING_DATA,
    payload: data
  })
}

