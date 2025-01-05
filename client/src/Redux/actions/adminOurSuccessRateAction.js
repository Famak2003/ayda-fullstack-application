
import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";


export const SET_ADMIN_OUR_SUCCESS_RATE_DATA = "SET_ADMIN_OUR_SUCCESS_RATE_DATA"


export const setAdminOurSuccessRateContent = (pageName, type, data) => async (dispatch) => {
    try {
        const res = await axiosInstance.post("/pages/oursuccessrate", {pageName, type, content: data})
        console.log(res)
        toast.success("upload complete")
    } catch (error) {
        console.log("There was an error when loggin out", error)
    }
};



export const getAdminOurSuccessRateContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/oursuccessrate')
        const data = res?.data
        const adminOurSuccessRateContent = JSON.parse(data[0].content)
        console.log("Our success rate from server ===> ?", adminOurSuccessRateContent)

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

