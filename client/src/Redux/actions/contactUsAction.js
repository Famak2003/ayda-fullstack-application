import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";


export const contactUsMail = (data) => async (dispatch) => {
    const _toastId = toast.loading("Sending...");
    try {
        const res = await axiosInstance.post("/user/contact-us", data)
        toast.dismiss(_toastId);
        toast.success(" Successful ");
    } catch (error) {
        toast.dismiss(_toastId);
        toast.error(` Failed `);
        console.error("There was an error sending mail", error?.response?.data)
    }
};