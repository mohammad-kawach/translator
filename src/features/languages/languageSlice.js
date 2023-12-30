import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    sourceLanguage: "",
    targetLanguage: "",
    supportedLanguages: [],
    error: null,
  },
  reducers: {
    setSupportedLanguages: (state, action) => {
      state.supportedLanguages = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSourceLanguage: (state, action) => {
      state.sourceLanguage = action.payload;
    },
    setTargetLanguage: (state, action) => {
      state.targetLanguage = action.payload;
    },
  },
});

export const {
  setSupportedLanguages,
  setError,
  setSourceLanguage,
  setTargetLanguage,
} = languageSlice.actions;
export default languageSlice.reducer;
