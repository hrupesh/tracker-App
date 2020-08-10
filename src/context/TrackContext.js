import createDataContext from "./createDataContext";
import trackerapi from "../api/trackapi";
import { navigate } from "../navigationRef";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "getTracks":
      return { ...state, tracks: action.payload };
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  try {
    const { data } = await trackerapi.get("/tracks");
    // console.log(data);
    dispatch({ type: "getTracks", payload: data });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};

const createTrack = (dispatch) => async (name, locations) => {
  try {
    //   console.log(name, locations.length);
    await trackerapi.post("/tracks", { name, locations });
    //   alert("Track Added ✔");
  } catch (err) {
    alert("Error: " + err.message);
  }
};

const delTrack = (dispatch) => async (track) => {
  try {
    // to call delete endpoint
    // console.log(track._id);
    navigate("loading");
    await trackerapi.post("/delete", { id: track._id });
    // alert("Track Deleted!");
  } catch (err) {
    alert("Error: " + err.message);
  }
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack, delTrack },
  { tracks: [] }
);
