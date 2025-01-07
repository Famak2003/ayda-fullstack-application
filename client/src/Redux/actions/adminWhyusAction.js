import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_WHY_US_DATA = "SET_ADMIN_WHY_US_DATA"


export const setAdminWhyusContent = (pageName, type, data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/pages/whyus", {pageName, type, content: data})
    console.log(res)
    toast.success("upload complete")
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};



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

