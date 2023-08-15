import { createSlice } from "@reduxjs/toolkit";
export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    job:''
  },
  reducers: {
    setJobList(state, action) {
      if (action.payload) {
        state.jobs = action.payload;
      }
    },
 
      setJob(state, action) {
        if (action.payload) {
          state.job = action.payload;
        }
      },
  },
});

export const { setJobList,setJob } = jobSlice.actions;
export const jobs = (state) => state.jobs.jobs;
export const job = (state) => state.jobs.job;
export default jobSlice.reducer;
