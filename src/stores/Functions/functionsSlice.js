import { createSlice } from "@reduxjs/toolkit";
export const functionSlice = createSlice({
    name: "functions",
    initialState: {
        functions: [],
    },
    reducers: {
        setFunctionList(state, action) {
            if (action.payload) {
                state.functions = action.payload;
            }
        },

    },
});

export const { setFunctionList, setFunction } = functionSlice.actions;
export const functions = (state) => state.functions.functions;
export default functionSlice.reducer;
