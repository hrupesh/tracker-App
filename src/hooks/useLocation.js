import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback, recording) => {
  const [error, setError] = useState(null);
  const [subcriber, setSubcriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 100,
          distanceInterval: 2,
        },
        callback
      );
      setSubcriber(sub);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subcriber.remove();
      setSubcriber(null);
    }
  }, [shouldTrack, recording]);

  return [error];
};
