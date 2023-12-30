import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
    translatedText: "",
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload;
    },
  },
});

export const { setText, setTranslatedText } = textSlice.actions;
export default textSlice.reducer;
