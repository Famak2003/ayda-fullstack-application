import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_OVARIAN_PRP_DATA = "SET_ADMIN_OVARIAN_PRP_DATA"


export const setAdminOvarianPRPContent = (pageName, type, data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/pages/ovarianprp", {pageName, type, content: data})
    console.log(res)
    toast.success("upload complete")
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};



export const getAdminOvarianPRPContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/ovarianprp')
      const data = res?.data
      const adminOvarianPRPParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminOvarianPRPData(adminOvarianPRPParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminOvarianPRPData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_OVARIAN_PRP_DATA,
    payload: data
  })
}

