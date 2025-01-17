import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_ACUPUNCTURE_DATA = "SET_ADMIN_ACUPUNCTURE_DATA"


export const getAdminAcupunctureContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/acupuncture')
      const data = res?.data
      const adminAcupunctureParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminAcupunctureData(adminAcupunctureParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminAcupunctureData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_ACUPUNCTURE_DATA,
    payload: data
  })
}

