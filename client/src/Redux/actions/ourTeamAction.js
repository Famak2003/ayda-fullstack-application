import axiosInstance from "../../utilities/axiosInstance";


export const SET_OUR_TEAM_DATA = "SET_OUR_TEAM_DATA"
  
export const getOurTeamContent = () => async(dispatch) => {
    try {
        const res = await axiosInstance.get('/pages/ourteam')
        const data = res?.data
        const ourTeamParsedContent = JSON.parse(data[0].content)
        console.log("Public Why us ===> ?  ", ourTeamParsedContent)
        dispatch(updateOurTeamData(ourTeamParsedContent))
    } catch (error) {
        console.log(error)
    }
}
  



export const updateOurTeamData = (data) => async(dispatch) => {
  dispatch({
    type: SET_OUR_TEAM_DATA,
    payload: data
  })
}

