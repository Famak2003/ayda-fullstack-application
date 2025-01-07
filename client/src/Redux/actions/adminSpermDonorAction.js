import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_SPERM_DONOR_DATA = "SET_ADMIN_SPERM_DONOR_DATA"


export const setAdminSpermDonorContent = (pageName, type, data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/pages/spermdonor", {pageName, type, content: data})
    console.log(res)
    toast.success("upload complete")
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};



export const getAdminSpermDonorContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/spermdonor')
      const data = res?.data
      const adminSpermDonorParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminSpermDonorData(adminSpermDonorParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminSpermDonorData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_SPERM_DONOR_DATA,
    payload: data
  })
}

