import axiosInstance from "../../utilities/axiosInstance";


export const SET_TRIP_DATA = "SET_TRIP_DATA"
  
export const getTripContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/trip')
        const data = res?.data
        const TripParsedContent = JSON.parse(data[0].content)
        console.log("Public Trip ===> ?  ", TripParsedContent)
        dispatch(updateTripData(TripParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateTripData = (data) => async(dispatch) => {
  dispatch({
    type: SET_TRIP_DATA,
    payload: data
  })
}

