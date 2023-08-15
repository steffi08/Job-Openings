import { useState } from "react";
import { useDispatch } from "react-redux";
import { useObserver } from "mobx-react";
import { setJobList, setJob } from "../../stores/Jobs/jobsSlice";

const useJobSave = () => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const setJobsList = () => {
        setError(null);
        try {
            fetch(
                `https://demo.jobsoid.com/api/v1/jobs`
            )
                .then((response) => response.json())
                .then((data) => {

                    dispatch(setJobList(data));
                });
        } catch (error) {
            console.log(`An Error Occurred: ${error.message}`);
            setError(error.message);
        }
    };
    const setJobById = (id) => {
        setError(null);
        try {
            fetch(
                `https://demo.jobsoid.com/api/v1/jobs/${id}`
            )
                .then((response) => response.json())
                .then((data) => {
                    dispatch(setJob(data));
                });

        } catch (error) {
            console.log(`An Error Occurred: ${error.message}`);
            setError(error.message);
        }
    };
    const getJobsByQuery = (query) => {

        setError(null)
        try {
            fetch(
                `https://demo.jobsoid.com/api/v1/jobs?${query}`
            )
                .then((response) => response.json())
                .then((data) => {
                    dispatch(setJobList(data));
                });

        } catch (error) {
            console.log(`An Error Occurred: ${error.message}`);
            setError(error.message);
        }
    };
    return useObserver(() => ({
        error: error,
        setJobsList: setJobsList,
        setJobById: setJobById,
        getJobsByQuery: getJobsByQuery
    }));
};

export default useJobSave;
