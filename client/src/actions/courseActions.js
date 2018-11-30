import axios from "axios";
import {
  GET_COURSES,
  COURSE_LOADING,
  GET_COURSE_BY_COURSENUMEBR,
  GET_ERRORS,
  REMOVE_COURSE_BY_COURSE_NUMBER
} from "./types";
// import reducers from "../reducers";

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

export const createCourse = (courseData, history) => dispatch => {
  axios
    .post("/api/courses", courseData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
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

//Delete Course by course Number
export const removeCourse = courseid => dispatch => {
  axios
    .delete("/api/courses/" + courseid)
    .then(res => {
      dispatch({
        // type: REMOVE_COURSE_BY_COURSE_NUMBER,
        // payload: res.data
        type: GET_COURSES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: REMOVE_COURSE_BY_COURSE_NUMBER,
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
