import { createSlice } from "@reduxjs/toolkit";

export const countValue = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },

  reducers: {
    ValueUpdate: (state, action) => {
    },
  },
});
export const { ValueUpdate } = countValue.actions;
export default countValue.reducer;