import { combineReducers } from "redux";
import experiences from "./experienceReducer";
import projects from "./projectReducer";

const rootReducer = combineReducers({
  experiences: experiences,
  projects: projects,
});

export default rootReducer;
