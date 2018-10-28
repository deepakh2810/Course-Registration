import { GET_COURSES, COURSE_LOADING } from "../actions/types";

const initialState = {
  courses: [
    {
      id: null,
      name: null,
      coursenumber: null,
      instructor: null,
      description: null,
      location: null,
      schedule: null,
      date: null
    }
  ],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COURSE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false
      };
    default:
      return state;
  }
}