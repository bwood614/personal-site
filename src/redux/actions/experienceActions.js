import * as types from "./actionTypes";
import * as experienceApi from "../../api/experienceApi";

export function loadExperiencesSuccess(experiences) {
  return { type: types.LOAD_EXPERIENCES_SUCCESS, experiences: experiences };
}

export function loadExperiences() {
  return function (dispatch) {
    return experienceApi
      .getExperiences()
      .then((experiences) => {
        dispatch(loadExperiencesSuccess(experiences));
      })
      .catch((error) => {
        throw error;
      });
  };
}
