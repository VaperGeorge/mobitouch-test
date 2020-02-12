import { combineReducers } from "redux";
import { compositions } from "./compositions";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  compositions,
  form: formReducer
});
