import axiosInstance from "../../utilities/axiosInstance";


export const SET_FAQ_DATA = "SET_FAQ_DATA"
  
export const getFAQContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/faq')
        const data = res?.data
        const faqParsedContent = JSON.parse(data[0].content)
        console.log("Public Our Prices ===> ?  ", faqParsedContent)
        dispatch(updateFAQData(faqParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateFAQData = (data) => async(dispatch) => {
  dispatch({
    type: SET_FAQ_DATA,
    payload: data
  })
}

