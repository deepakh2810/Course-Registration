import { GET_STUDENTINFO, STUDENTINFO_LOADING } from "../actions/types";

const initialState = {
  studentinfo: [
    {
      id: null,
      name: null,
      major: null,
      type: null,
      studentid: null,
      gpa: null,
      courses: [
        {
          name: null,
          coursenumber: null,
          instructor: null,
          description: null,
          location: null,
          schedule: null
        }
      ]
    }
  ],
  loading: false
};

export default function(state = initialState, action) {
  // console.log("reducer:", action);

  switch (action.type) {
    case STUDENTINFO_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_STUDENTINFO:
      return {
        ...state,
        studentinfo: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
