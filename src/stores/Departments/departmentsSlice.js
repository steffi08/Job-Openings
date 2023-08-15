import { createSlice } from "@reduxjs/toolkit";
export const departmentSlice = createSlice({
  name: "departments",
  initialState: {
    departments: [],
    department:''
  },
  reducers: {
    setDepartmentList(state, action) {
      if (action.payload) {
        state.departments = action.payload;
      }
    },
    setDepartment(state, action) {
      if (action.payload) {
        state.department = action.payload;
      }
    },
  },
});

export const { setDepartmentList ,setDepartment} = departmentSlice.actions;
export const departments = (state) => state.departments.departments;
export const department = (state) => state.departments.department;
export default departmentSlice.reducer;
