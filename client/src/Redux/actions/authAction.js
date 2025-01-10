import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const IS_EMAIL_VERIFIED = 'IS_EMAIL_VERIFIED';
export const IS_OTP_VERIFIED = 'IS_OTP_VERIFIED';


export const login = (data) => async (dispatch) => {
    try {
        const res = await axiosInstance.post("/user/login", data)
        dispatch(setIsAuthenticated(true))
        window.location.href = "/admin/dashboard"
        console.log(res.data)
    } catch (error) {
        console.log(error)
        // toast.error(error)
        console.log("There was an error when loggin in", error)
    }
};

export const verifyEmail = (data) => async (dispatch) => {
    const _toastId = toast.loading("Sending mail...");
    try {
        const res = await axiosInstance.post("/user/verify-mail", data)
        toast.dismiss(_toastId);
        toast.success(" Mail sent 🎉! ");
        console.log(" /// Mail sent ///", res.data)
        dispatch({ // update isEmailVerified state
            type: IS_EMAIL_VERIFIED,
            payload: {email: data?.email}
        })
    } catch (error) {
        dispatch({
            type: IS_EMAIL_VERIFIED,
            payload: null
        })
        toast.dismiss(_toastId);
        toast.error(` Failed ! `);
        console.log("There was an error sending mail", error?.response?.data)
    }
};

export const verifyToken = (data) => async (dispatch) => {
    const _toastId = toast.loading("Verifying OTP...");
    try {
        const res = await axiosInstance.post("/user/verify-token", data)
        toast.dismiss(_toastId);
        toast.success(" Successful 🎉! ");
        console.log(" /// Verified OTP ///", res.data)
        dispatch({ // update isOTPVerified state
            type: IS_OTP_VERIFIED,
            payload: true
        })
    } catch (error) {
        toast.dismiss(_toastId);
        toast.error(` Failed ${error?.response?.data?.message}! `);
        console.log("There was an error sending otp", error?.response?.data)
    }
};

export const resetPassword = (data) => async (dispatch) => {
    try {
        const res = await axiosInstance.post("/user/reset-password", data);
        toast.success("Password Reset Successful 🎉!");

        console.log("Password Reset Response: ", res.data);

        await dispatch({
            type: IS_OTP_VERIFIED,
            payload: false,
        });
        await dispatch({
            type: IS_EMAIL_VERIFIED,
            payload: null,
        });

        // Use navigate or a function to redirect without page reload
        window.location.href = "/admin/auth";
    } catch (error) {
        toast.error(`Password Reset Failed: ${error?.response?.data?.message}`);
        console.log("Error during password reset: ", error?.response?.data);
    }
};


export const setIsAuthenticated = (value) => async (dispatch) => {
    dispatch({  
            type: IS_AUTHENTICATED,
            payload: value
        }
    )
};

export const getTokenHealth = () => async (dispatch) => {
    try {
        const res = await axiosInstance.get("/auth")
    } catch (error) {
        console.error(error)
        if (error.status){
            toast.error("Session expired, try login")
            dispatch({  
                type: IS_AUTHENTICATED,
                payload: false
            })
        }
    }
}

export const logout = () => async (dispatch) => {
    try {
        const res = await axiosInstance.get("/user/logout")
        dispatch(setIsAuthenticated(false))
        console.log("logout")
    } catch (error) {
        console.log("There was an error when loggin out", error)
    }
};


// export const updateIsEmailVerified = () => async (dispatch) => {
//     disp
// }