import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMIN_EGG_FREEZING_DATA = "SET_ADMIN_EGG_FREEZING_DATA"


export const getAdminEggFreezingContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/eggfreezing')
      const data = res?.data
      const adminEggFreezingParsedContent = JSON.parse(data[0].content)


      dispatch(updateAdminEggFreezingData(adminEggFreezingParsedContent))
    } catch (error) {
        console.log(error)
        toast.error("Fetch Failed")
    }

}


export const updateAdminEggFreezingData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_EGG_FREEZING_DATA,
    payload: data
  })
}

