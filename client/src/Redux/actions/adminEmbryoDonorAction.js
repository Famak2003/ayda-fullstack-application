import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_EMBRYO_DONOR_DATA = "SET_ADMIN_EMBRYO_DONOR_DATA"


export const getAdminEmbryoDonorContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/embryodonor')
      const data = res?.data
      const adminEmbryoDonorParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminEmbryoDonorData(adminEmbryoDonorParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminEmbryoDonorData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_EMBRYO_DONOR_DATA,
    payload: data
  })
}

