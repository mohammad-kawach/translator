// src/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import textReducer from "../features/text/textSlice";
import themeReducer from "../features/theme/themeSlice";
import languageReducer from "../features/languages/languageSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  text: textReducer,
  language: languageReducer,
  // Add more reducers as needed
});

export default rootReducer;
