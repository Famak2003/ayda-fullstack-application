import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_TRIP_DATA = "SET_ADMIN_TRIP_DATA"


export const setAdminTripContent = (pageName, type, data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/pages/trip", {pageName, type, content: data})
    console.log(res)
    toast.success("upload complete")
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};



export const getAdminTripContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/trip')
      const data = res?.data
      const adminTripParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminTripData(adminTripParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")     
    }

}


export const updateAdminTripData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_TRIP_DATA,
    payload: data
  })
}

