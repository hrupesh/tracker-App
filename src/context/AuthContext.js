import createDataContext from "./createDataContext";
import trackerApi from "../api/trackapi";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return {
        errorMessage: "",
        token: action.payload,
      };
    case "login":
      return {
        errorMessage: "",
        token: action.payload,
      };
    case "clearErr":
      return {
        ...state,
        errorMessage: "",
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
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailPattern.test(email)) {
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signup", payload: response.data.token });
        navigate("TrackList");
      } else {
        dispatch({
          type: "add_error",
          payload: "Enter a valid email",
        });
      }
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
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/login", { email, password });
      console.log(response.data);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "login", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      console.log(err.response.data);

      dispatch({
        type: "add_error",
        payload: "Error: " + err.response.data.error,
      });
    }
  };
};

const clearErr = (dispatch) => {
  return () => {
    dispatch({ type: "clearErr" });
  };
};

const logout = (dispatch) => {
  return ({ email, password }) => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout, clearErr },
  { token: null, errorMessage: "" }
);
