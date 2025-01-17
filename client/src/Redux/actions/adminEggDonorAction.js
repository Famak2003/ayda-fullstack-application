import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_EGG_DONOR_DATA = "SET_ADMIN_EGG_DONOR_DATA"


export const getAdminEggDonorContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/eggdonor')
      const data = res?.data
      const adminEggDonorParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminEggDonorData(adminEggDonorParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminEggDonorData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_EGG_DONOR_DATA,
    payload: data
  })
}

