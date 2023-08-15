import { useState } from "react";
import { useDispatch } from "react-redux";
import { useObserver } from "mobx-react";
import { setFunctionList,  } from "../../stores/Functions/functionsSlice";

const useFunctionsSave = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const setFunctionsList = () => {
    setError(null);
    try {
      fetch(
        `https://demo.jobsoid.com/api/v1/functions`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(setFunctionList(data));
        });
    } catch (error) {
      console.log(`An Error Occurred: ${error.message}`);
      setError(error.message);
    }
  };

  return useObserver(() => ({
    error: error,
    setFunctionsList: setFunctionsList,
  }));
};

export default useFunctionsSave;
