import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function experienceReducer(
  state = initialState.experiences,
  action
) {
  switch (action.type) {
    case types.LOAD_EXPERIENCES_SUCCESS:
      return action.experiences;
    default:
      return state;
  }
}
