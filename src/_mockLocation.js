import * as Location from "expo-location";

const tenMeters = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 1000000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 75,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 20.0380938 + increment * tenMeters,
      longitude: 73.80659 + increment * tenMeters,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
