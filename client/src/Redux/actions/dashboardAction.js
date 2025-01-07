import axiosInstance from "../../utilities/axiosInstance";


export const SET_ABOUT_US_DROPDOWN = "SET_ABOUT_US_DROPDOWN"
export const SET_TREATMENT_DROPDOWN = "SET_TREATMENT_DROPDOWN"
  

export const updateAboutusDropdown = (data) => async(dispatch) => {
  dispatch({
    type: SET_ABOUT_US_DROPDOWN,
    payload: data
  })
}

export const updateTreatmentDropdown = (data) => async(dispatch) => {
    dispatch({
      type: SET_TREATMENT_DROPDOWN,
      payload: data
    })
  }
  
