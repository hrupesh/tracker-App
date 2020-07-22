import createDataContext from "./createDataContext";
import trackerApi from "../api/trackapi";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {};
};

const login = (dispatch) => {
  return ({ email, password }) => {};
};

const logout = (dispatch) => {
  return ({ email, password }) => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout },
  { isSignedIn: false }
);
