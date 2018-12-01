import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import courseReducer from "./courseReducer";
import studentinfoReducer from "./studentinfoReducer";
import todoReducer from "./todoReducer";
import addtodoReducer from "./addtodoReducer";
import addholdsReducer from "./addholdsReducer";
import reviewsReducer from "./reviewsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  courses: courseReducer,
  studentsinfo: studentinfoReducer,
  users: todoReducer,
  todos: addtodoReducer,
  holds: addholdsReducer,
  reviews: reviewsReducer
});
