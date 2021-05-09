import { SET_LOGGED_USER, UNSET_LOGGED_USER } from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { user } : { user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGGED_USER:
      return {
        ...state,
        user: payload.user,
      };
    case UNSET_LOGGED_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
