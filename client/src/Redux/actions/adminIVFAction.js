import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_IVF_DATA = "SET_ADMIN_IVF_DATA"


export const getAdminIVFContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/ivf')
      const data = res?.data
      const adminIVFParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminIVFData(adminIVFParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminIVFData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_IVF_DATA,
    payload: data
  })
}

