import createDataContext from "./createDataContext";
import trackerApi from "../api/trackapi";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = async (dispatch) => {
  return ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup',{ email, password });
        console.log(response.data);
    } catch (err) {
        console.log(err.message);
    }
  };
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
