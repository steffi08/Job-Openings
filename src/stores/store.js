import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./Locations/locationSlice";
import departmentReducer from "./Departments/departmentsSlice";
import functionReducer from "./Functions/functionsSlice";
import jobsReducer from "./Jobs/jobsSlice";
export const store = configureStore({
  reducer: {
    locations: locationReducer,
    departments:departmentReducer,
    functions: functionReducer,
    jobs:jobsReducer
  },
});
