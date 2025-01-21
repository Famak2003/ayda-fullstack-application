import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_FAQ_DATA = "SET_ADMIN_FAQ_DATA"


export const getAdminFAQContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/faq')
      const data = res?.data
      const adminFAQParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminFAQData(adminFAQParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminFAQData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_FAQ_DATA,
    payload: data
  })
}

