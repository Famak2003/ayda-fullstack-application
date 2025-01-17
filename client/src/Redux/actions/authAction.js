import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const IS_EMAIL_VERIFIED = 'IS_EMAIL_VERIFIED';
export const IS_OTP_VERIFIED = 'IS_OTP_VERIFIED';
export const SET_PRTMISSION = 'SET_PRTMISSION';
export const SET_USER_ID = 'SET_USER_ID';
export const  SET_PROFILE = "SET_PROFILE"



export const login = (data) => async (dispatch) => {
    try {
        const res = await axiosInstance.post("/user/login", data)
        const permission = res?.data?.role
        console.log(res?.data)
        dispatch(setIsAuthenticated(true))
        dispatch(setPermission(permission))
        dispatch(setUserID(res.data.id))
        toast.success("login success")
    } catch (error) {
        toast.error("Incorrect credential")
    }
};

export const setPermission = (data) => (dispatch) => {
    dispatch({
        type: SET_PRTMISSION,
        payload: data
    })
}

export const setUserID = (data) => (dispatch) => {
    dispatch({
        type: SET_USER_ID,
        payload: data
    })
}

export const verifyEmail = (data) => async (dispatch) => {
    const _toastId = toast.loading("Sending mail...");
    try {
        const res = await axiosInstance.post("/user/verify-mail", data)
        toast.dismiss(_toastId);
        toast.success(" Mail sent 🎉! ");
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

export const getProfile = (data) => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/user/get-profile', data)
        const result = res?.data
        dispatch({
            type: SET_PROFILE,
            payload: result
        })
    } catch (error) {
        toast.error("trouble getting profile")
    }

}

export const updateProfile = (data) => async(dispatch) => {
    try {
        const res = await axiosInstance.post('/user/update-profile', data)
        toast.success('profile updated')
        
    } catch (error) {
        console.log(error.response.data.error === "Conflict")
        if(error.response.data.error === "Conflict"){
            toast.error("Email already in use")
            return
        }
        toast.error("trouble changing profile")
    }

}

