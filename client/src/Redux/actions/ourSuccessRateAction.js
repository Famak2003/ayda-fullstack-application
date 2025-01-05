


import axiosInstance from "../../utilities/axiosInstance";


export const SET_OUR_SUCCESS_RATE_DATA = "SET_OUR_SUCCESS_RATE_DATA"
  
export const getOurSuccessRateContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/oursuccessrate')
        const data = res?.data
        const ourSuccessRateParsedContent = JSON.parse(data[0].content)
        console.log("Public Our Success Rate ===> ?  ", ourSuccessRateParsedContent)
        dispatch(updateOurSuccessRateData(ourSuccessRateParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateOurSuccessRateData = (data) => async(dispatch) => {
  dispatch({
    type: SET_OUR_SUCCESS_RATE_DATA,
    payload: data
  })
}

