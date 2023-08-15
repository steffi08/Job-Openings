import { createSlice } from "@reduxjs/toolkit";
export const locationSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
  },
  reducers: {
    setLocationList(state, action) {
      if (action.payload) {
        state.locations = action.payload;
      }
    },
  },
});

export const { setLocationList } = locationSlice.actions;
export const locations = (state) => state.locations.locations;
export default locationSlice.reducer;
