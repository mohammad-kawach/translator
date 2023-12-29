// src/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import textReducer from "../features/text/textSlice";
import themeReducer from "../features/theme/themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  text: textReducer,
  // Add more reducers as needed
});

export default rootReducer;
