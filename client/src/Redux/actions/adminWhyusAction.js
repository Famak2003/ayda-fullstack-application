import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_WHY_US_DATA = "SET_ADMIN_WHY_US_DATA"


export const getAdminWhyusContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/whyus')
      const data = res?.data
      const adminWhyusParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminWhyusData(adminWhyusParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminWhyusData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_WHY_US_DATA,
    payload: data
  })
}

