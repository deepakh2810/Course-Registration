import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import courseReducer from "./courseReducer";
import studentinfoReducer from "./studentinfoReducer";
import paymentReducer from "./paymentReducer";


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  courses: courseReducer,
  studentsinfo: studentinfoReducer,
  paymentReducer: paymentReducer
});
