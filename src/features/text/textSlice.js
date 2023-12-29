import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    setText: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setText } = textSlice.actions;
export default textSlice.reducer;