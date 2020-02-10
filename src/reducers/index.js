import { combineReducers } from "redux";
import { compositions, addNewComposition, getPostById } from "./compositions";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  compositions,
  addNewComposition,
  getPostById,
  form: formReducer
});
