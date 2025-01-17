import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_TRIP_DATA = "SET_ADMIN_TRIP_DATA"


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

