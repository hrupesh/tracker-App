import createDataContext from "./createDataContext";
import trackerapi from "../api/trackapi";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, locations) => {
  try {
    //   console.log(name, locations.length);
    await trackerapi.post("/tracks", { name, locations });
    //   alert("Track Added ✔");
  } catch (err) {
    alert("Error: " + err.message);
  }
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
