import axiosInstance from "../../utilities/axiosInstance";


export const SET_ACUPUNCTURE_DATA = "SET_ACUPUNCTURE_DATA"
  
export const getAcupunctureContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/acupuncture')
        const data = res?.data
        const acupunctureParsedContent = JSON.parse(data[0].content)
        console.log("Public Acupuncture ===> ?  ", acupunctureParsedContent)
        dispatch(updateAcupunctureData(acupunctureParsedContent))
    } catch (error) {
        console.log(error)
    }
}



export const updateAcupunctureData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ACUPUNCTURE_DATA,
    payload: data
  })
}

