import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginReducer(state = initialState.loggedIn, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      if (
        action.credentials.username === "admin" &&
        action.credentials.password === "admin"
      ) {
        return true;
      } else {
        return false;
      }

    default:
      return state;
  }
}
