import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_EGG_DONOR_DATA = "SET_ADMIN_EGG_DONOR_DATA"


export const setAdminEggDonorContent = (pageName, type, data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/pages/eggdonor", {pageName, type, content: data})
    console.log(res)
    toast.success("upload complete")
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};



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

