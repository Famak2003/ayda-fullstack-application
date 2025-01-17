import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";


export const SET_ADMIN_OUR_PRICES_DATA = "SET_ADMIN_OUR_PRICES_DATA"
  
export const getAdminOurPricesContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/ourprices')
      const data = res?.data
      const adminOurPricesParsedContent = JSON.parse(data[0].content)
      dispatch(updateAdminOurPricesData(adminOurPricesParsedContent))
    } catch (error) {
        console.log(error)
    }

}
  



export const updateAdminOurPricesData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_OUR_PRICES_DATA,
    payload: data
  })
}

