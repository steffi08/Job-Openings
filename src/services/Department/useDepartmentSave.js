import { useState } from "react";
import { useDispatch } from "react-redux";
import { useObserver } from "mobx-react";
import { setDepartmentList, setDepartment } from "../../stores/Departments/departmentsSlice";

const useDepartmentSave = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const setDepartmentsList = () => {
    setError(null);
    try {
      fetch(
        `https://demo.jobsoid.com/api/v1/departments`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(setDepartmentList(data));
        });
    } catch (error) {
      console.log(`An Error Occurred: ${error.message}`);
      setError(error.message);
    }
  };
  const setDepartmentValue = (Department) => {
    setError(null);
    try {
      dispatch(setDepartment(Department));
    } catch (error) {
      console.log(`An Error Occurred: ${error.message}`);
      setError(error.message);
    }
  };
  return useObserver(() => ({
    error: error,
    setDepartmentsList: setDepartmentsList,
    setDepartmentValue: setDepartmentValue,
  }));
};

export default useDepartmentSave;
