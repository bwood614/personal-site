import * as types from "./actionTypes";
import * as projectApi from "../../api/projectApi";

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects: projects };
}

export function loadProjects() {
  return function (dispatch) {
    return projectApi
      .getProjects()
      .then((projects) => {
        dispatch(loadProjectsSuccess(projects));
      })
      .catch((error) => {
        throw error;
      });
  };
}
