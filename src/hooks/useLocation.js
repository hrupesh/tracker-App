import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 100,
          distanceInterval: 2,
        },
        (location) => {
          addLocation(location);
          // console.log(location);
        }
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
};
