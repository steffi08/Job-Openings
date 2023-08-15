import { useState } from "react";
import { useDispatch } from "react-redux";
import { useObserver } from "mobx-react";
import { setLocationList } from "../../stores/Locations/locationSlice";

const useLocationSave = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const setLocationsList = (query) => {
    setError(null);
    try {
      fetch(
        `https://demo.jobsoid.com/api/v1/locations`
      )
        .then((response) => response.json())
         .then((data) => {
          dispatch(setLocationList(data));
        });
    } catch (error) {
      console.log(`An Error Occurred: ${error.message}`);
      setError(error.message);
    }
  };

  return useObserver(() => ({
    error: error,
    setLocationsList: setLocationsList,
  }));
};

export default useLocationSave;
