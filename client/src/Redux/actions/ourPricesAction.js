import axiosInstance from "../../utilities/axiosInstance";


export const SET_OUR_PRICES_DATA = "SET_OUR_PRICES_DATA"
  
export const getOurPricesContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/ourprices')
        const data = res?.data
        const ourPricesParsedContent = JSON.parse(data[0].content)
        console.log("Public Our Prices ===> ?  ", ourPricesParsedContent)
        dispatch(updateOurPricesData(ourPricesParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateOurPricesData = (data) => async(dispatch) => {
  dispatch({
    type: SET_OUR_PRICES_DATA,
    payload: data
  })
}

