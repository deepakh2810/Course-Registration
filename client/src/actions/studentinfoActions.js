import axios from "axios";
import { GET_STUDENTINFO, STUDENTINFO_LOADING } from "./types";

//Get Courses
export const getStudentinfo = () => dispatch => {
  // console.log("Studentinfoactions");
  dispatch(setStudentInfoLoading());
  axios
    .get("/api/studentsinfo")
    .then(res =>
      dispatch({
        type: GET_STUDENTINFO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_STUDENTINFO,
        payload: {}
      })
    );
};

//Course Loading
export const setStudentInfoLoading = () => {
  return {
    type: STUDENTINFO_LOADING
  };
};
