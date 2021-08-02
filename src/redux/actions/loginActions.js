import * as types from "./actionTypes";

export function loginUser(credentials) {
  return { type: types.LOGIN_USER, credentials: credentials };
}
