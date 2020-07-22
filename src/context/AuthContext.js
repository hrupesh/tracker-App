import createDataContext from "./createDataContext";
import trackerApi from "../api/trackapi";
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return {
        errorMessage: "",
        token: action.payload,
      };
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload,
      };
      console.log(state);
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
    } catch (err) {
      console.log(err.response.data);
      if (err.response.data.includes("duplicate key")) {
        dispatch({
          type: "add_error",
          payload: "This Email is already registered with us, try logging in.",
        });
      } else {
        dispatch({
          type: "add_error",
          payload: "An Error Occured in SignUp!",
        });
      }
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
  { token: null, errorMessage: "" }
);
