import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";


export const SET_ADMIN_OUR_PRICES_DATA = "SET_ADMIN_OUR_PRICES_DATA"

export const setAdminOurPricesContent = (pageName, type, data) => async (dispatch) => {
    try {
      const res = await axiosInstance.post("/pages/ourprices", {pageName, type, content: data})
      console.log(res)
      toast.success("upload complete")
    } catch (error) {
        console.log("There was an error when loggin out", error)
    }
  };
  
  
  
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

