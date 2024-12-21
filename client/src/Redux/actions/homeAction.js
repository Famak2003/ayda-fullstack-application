import toast from "react-hot-toast";
import axiosInstance from "../../utilities/axiosInstance";

export const GET_ALL_HOME_CONTENT = 'GET_ALL_HOME_CONTENT';
export const UPLOAD_HERO_SECTION   = 'UPLOAD_HERO_SECTION ';

export const getAllHomeContent = (data) => ({
  type: GET_ALL_HOME_CONTENT,
  payload: data,
});

export const uploadHeroSection = (data) => async (dispatch) => {
  try {
      const res = await axiosInstance.post("/sections/upload-hero-section", data)
      console.log(res)
      toast.success("upload complete")
      // dispatch({
      //           type: UPLOAD_HERO_SECTION,
      //           payload: res.data.message
      //         })
  } catch (error) {
      console.log("There was an error when loggin out", error)
  }
};
