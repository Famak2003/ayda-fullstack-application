import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";


export const SET_WHY_US_DATA = "SET_WHY_US_DATA"
  
export const getWhyusContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/whyus')
        const data = res?.data
        const whyusParsedContent = JSON.parse(data[0].content)
        console.log("Public Why us ===> ?  ", whyusParsedContent)
        dispatch(updateWhyusData(whyusParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateWhyusData = (data) => async(dispatch) => {
  dispatch({
    type: SET_WHY_US_DATA,
    payload: data
  })
}

