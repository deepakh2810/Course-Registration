import { GET_USERS, USER_LOADING } from "../actions/types";

const initialState = {
  users: [
    {
      method: null,
      user_type: null,
      university_id: null,
      local: {},
      google: {},
      date: null
    }
  ],
  loading: false
};

export default function(state = initialState, action) {
  console.log("In reducer: ", action);
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
