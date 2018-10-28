import axios from "axios";
import { GET_COURSES, COURSE_LOADING } from "./types";

//Get Courses
export const getCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get("/api/courses")
    .then(res =>
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSES,
        payload: {}
      })
    );
};

//Course Loading
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING
  };
};
