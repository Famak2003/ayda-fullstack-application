import axiosInstance from "../../utilities/axiosInstance";


export const SET_EGG_DONOR_DATA = "SET_EGG_DONOR_DATA"
  
export const getEggDonorContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/eggdonor')
        const data = res?.data
        const eggDonorParsedContent = JSON.parse(data[0].content)
        console.log("Public eggDonor ===> ?  ", eggDonorParsedContent)
        dispatch(updateEggdonorData(eggDonorParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateEggdonorData = (data) => async(dispatch) => {
  dispatch({
    type: SET_EGG_DONOR_DATA,
    payload: data
  })
}

