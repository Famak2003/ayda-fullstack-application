import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const  SET_ADMINS_DATA = "SET_ADMINS_DATA"



export const getAdminsContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/user/get-all')
        const data = res?.data

        dispatch(updateAdminsData(data))
    } catch (error) {
        dispatch(updateAdminsData([]))
        toast.error("trouble getting data")
    }

}

export const createAdmin = (value) => async(dispatch) => {
    try {
        const res = await axiosInstance.post('/user/create', value)
        const data = res?.data
        dispatch(getAdminsContent())
        toast.success("Admin Created")

    } catch (error) {
        toast.error(`Error creating admin`)
    }

}

export const updateRole = (value) => async(dispatch) => {
    try {
        const res = await axiosInstance.post('/user/update-role', value)
        const data = res?.data
        toast.success(`${data?.message}`)
        dispatch(getAdminsContent())

    } catch (error) {
        toast.error(`Error updating role`)
    }
}

export const deleteAdmin = (value) => async(dispatch) => {
    try {
        const res = await axiosInstance.post('/user/delete-admin', value)
        const data = res?.data
        toast.success(`${data?.message}`)
        dispatch(getAdminsContent())

    } catch (error) {
        toast.error(`Error Deleting`)
    }

}



export const updateAdminsData = (data) => async(dispatch) => {
    dispatch({
        type: SET_ADMINS_DATA,
        payload: data
    })
}

