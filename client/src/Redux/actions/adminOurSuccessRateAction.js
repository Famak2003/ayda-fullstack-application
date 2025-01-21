
import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";


export const SET_ADMIN_OUR_SUCCESS_RATE_DATA = "SET_ADMIN_OUR_SUCCESS_RATE_DATA"


export const getAdminOurSuccessRateContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/oursuccessrate')
        const data = res?.data
        const adminOurSuccessRateContent = JSON.parse(data[0].content)

        dispatch(updateOurSuccessRateData(adminOurSuccessRateContent))
    } catch (error) {
        console.log(error)
    }

}

export const updateOurSuccessRateData = (data) => async(dispatch) => {
    dispatch({
        type: SET_ADMIN_OUR_SUCCESS_RATE_DATA,
        payload: data
    })
}

