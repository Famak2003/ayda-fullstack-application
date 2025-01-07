import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_EMBRYO_DONOR_DATA = "SET_ADMIN_EMBRYO_DONOR_DATA"


export const setAdminEmbryoDonorContent = (pageName, type, data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/pages/embryodonor", {pageName, type, content: data})
    console.log(res)
    toast.success("upload complete")
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};



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

