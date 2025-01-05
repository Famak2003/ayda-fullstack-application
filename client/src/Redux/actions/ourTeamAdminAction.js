import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

// export const GET_ADMIN_WHY_US = "GET_ADMIN_WHY_US"
export const  SET_ADMIN_OUR_TEAM_DATA = "SET_ADMIN_OUR_TEAM_DATA"


export const setAdminOurTeamContent = (pageName, type, data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/pages/ourteam", {pageName, type, content: data})
    console.log(res)
    toast.success("upload complete")
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};



export const getAdminOurTeamContent = () => async(dispatch) => {
    try {
      const res = await axiosInstance.get('/pages/ourteam')
      const data = res?.data
      const adminOurTeamParsedContent = JSON.parse(data[0].content)
      dispatch(updateOurTeamData(adminOurTeamParsedContent))
      console.log("Our team from server ===> ?", adminOurTeamParsedContent)
    } catch (error) {
        console.log(error)
    }

}


export const updateOurTeamData = (data) => async(dispatch) => {
  dispatch({
    type: SET_ADMIN_OUR_TEAM_DATA,
    payload: data
  })
}

