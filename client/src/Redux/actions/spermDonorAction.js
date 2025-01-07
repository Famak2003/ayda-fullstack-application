import axiosInstance from "../../utilities/axiosInstance";


export const SET_SPERM_DONOR_DATA = "SET_SPERM_DONOR_DATA"
  
export const getSpermDonorContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/spermdonor')
        const data = res?.data
        const spermDonorParsedContent = JSON.parse(data[0].content)
        console.log("Public spermDonor ===> ?  ", spermDonorParsedContent)
        dispatch(updateSpermdonorData(spermDonorParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateSpermdonorData = (data) => async(dispatch) => {
  dispatch({
    type: SET_SPERM_DONOR_DATA,
    payload: data
  })
}

