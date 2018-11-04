import axios from "axios";
import {
  GET_COURSES,
  COURSE_LOADING,
  GET_COURSE_BY_COURSENUMEBR
} from "./types";

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

//Get Courses by CourseNumber
export const getCoursesByCourseNumber = coursenumber => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get("/api/courses/" + coursenumber)
    .then(res => {
      dispatch({
        type: GET_COURSE_BY_COURSENUMEBR,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_COURSE_BY_COURSENUMEBR,
        payload: {}
      });
    });
};

//Course Loading
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING
  };
};
