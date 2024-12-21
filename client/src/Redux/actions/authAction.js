import axiosInstance from "../../utilities/axiosInstance";

export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export const login = (data) => async (dispatch) => {
    try {
        const res = await axiosInstance.post("/user/login", data)
        dispatch(setIsAuthenticated(true))
        window.location.href = "/admin/dashboard"
        console.log("login")
    } catch (error) {
        console.log("There was an error when loggin in", error)
    }
};

export const setIsAuthenticated = (value) => async (dispatch) => {
    dispatch(
        {  
            type: IS_AUTHENTICATED,
            payload: value
        }
    )
};

export const logout = () => async (dispatch) => {
    try {
        const res = await axiosInstance.get("/user/logout")
        dispatch(setIsAuthenticated(false))
        console.log("logout")
    } catch (error) {
        console.log("There was an error when loggin out", error)
    }
};


