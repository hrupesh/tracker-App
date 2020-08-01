import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      if (state.name.length > 3) {
        return { ...state, recording: false };
      } else {
        alert("Track Name must be atleast 4 characters long 🙄");
        return { ...state };
      }
    case "add_Location":
      return { ...state, locations: [...state.location, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => {
  dispatch({ type: "change_name", payload: name });
};
const startRecording = (dispatch) => () => {
  dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });
  console.log(location);
  if (recording) {
    console.log("Recoring ON : "+location);
    dispatch({ type: "add_Location", payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { recording: false, locations: [], name: "", currentLocation: null }
);
