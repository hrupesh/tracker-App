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
  //   console.log(name, locations.length);
  await trackerapi.post("/tracks", { name, locations });
  alert("Track Added ✔");
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
