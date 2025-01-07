import axiosInstance from "../../utilities/axiosInstance";


export const SET_OVARIAN_PRP_DATA = "SET_OVARIAN_PRP_DATA"
  
export const getOvarianPRPContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/ovarianprp')
        const data = res?.data
        const ovarianPRPParsedContent = JSON.parse(data[0].content)
        console.log("Public OvarianPRP ===> ?  ", ovarianPRPParsedContent)
        dispatch(updateOvarianPRPData(ovarianPRPParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  


export const updateOvarianPRPData = (data) => async(dispatch) => {
  dispatch({
    type: SET_OVARIAN_PRP_DATA,
    payload: data
  })
}

