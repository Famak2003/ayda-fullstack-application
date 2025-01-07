import axiosInstance from "../../utilities/axiosInstance";


export const SET_EMBRYO_DONOR_DATA = "SET_EMBRYO_DONOR_DATA"
  
export const getEmbryoDonorContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/embryodonor')
        const data = res?.data
        const embryoDonorParsedContent = JSON.parse(data[0].content)
        console.log("Public embryoDonor ===> ?  ", embryoDonorParsedContent)
        dispatch(updateEmbryodonorData(embryoDonorParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateEmbryodonorData = (data) => async(dispatch) => {
  dispatch({
    type: SET_EMBRYO_DONOR_DATA,
    payload: data
  })
}

