import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const SET_IS_RECAPTCHA_VERIFIED = "SET_IS_RECAPTCHA_VERIFIED"

export const contactUsMail = (data) => async (dispatch) => {
    const _toastId = toast.loading("Sending...");
    try {
        const res = await axiosInstance.post("/user/contact-us", data)
        toast.dismiss(_toastId);
        toast.success(" Successful ");
    } catch (error) {
        toast.dismiss(_toastId);
        toast.error(` Something went wrong `);
    }
};

export const verifyRecaptcha = (data) => async (dispatch) => {
    try {
        const res = await axiosInstance.post("/user/verify-recaptcha", data)
        dispatch({
            type: SET_IS_RECAPTCHA_VERIFIED,
            payload: res?.data?.message
        })
    } catch (error) {
        console.warn(error?.data?.message)
    }
}