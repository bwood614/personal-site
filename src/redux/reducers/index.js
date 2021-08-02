import { combineReducers } from "redux";
import experiences from "./experienceReducer";
import projects from "./projectReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  experiences: experiences,
  projects: projects,
  loggedIn: loginReducer,
});

export default rootReducer;
