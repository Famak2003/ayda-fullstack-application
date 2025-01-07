import axiosInstance from "../../utilities/axiosInstance";


export const SET_IVF_DATA = "SET_IVF_DATA"
  
export const getIVFContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/ivf')
        const data = res?.data
        const ivfParsedContent = JSON.parse(data[0].content)
        console.log("Public IVF ===> ?  ", ivfParsedContent)
        dispatch(updateIVFData(ivfParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateIVFData = (data) => async(dispatch) => {
  dispatch({
    type: SET_IVF_DATA,
    payload: data
  })
}

