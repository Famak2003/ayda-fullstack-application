import axiosInstance from "../../utilities/axiosInstance";

export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export const login = (data) => async (dispatch) => {
    try {
        const res = await axiosInstance.post("/user/login", data)
        localStorage.setItem("token", res.data.token)
        console.log(res)
        window.location.href = "/admin/dashboard"
        dispatch(
            { 
                type: IS_AUTHENTICATED,
                payload: true
            }
        )
    } catch (error) {
        console.log("There was an error when loggin in", error)
    }
};

export const logout = () => async (dispatch) => {
    try {
        const res = await axiosInstance.get("/user/logout")
        console.log(res)
        localStorage.removeItem("token")
        console.log(localStorage.getItem('token'))
        dispatch(
                    { 
                        type: IS_AUTHENTICATED,
                        payload: false
                    }
                )
    } catch (error) {
        console.log("There was an error when loggin out", error)
    }
};