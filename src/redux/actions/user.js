import { SET_LOGGED_USER, UNSET_LOGGED_USER } from "../actions/types";

export const set_logged_user = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: SET_LOGGED_USER,
    payload: {
      user,
    },
  };
};

export const unset_logged_user = () => {
  localStorage.removeItem("user");
  return {
    type: UNSET_LOGGED_USER,
  };
};
