// src/components/YourComponent.js
// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../features/text/textSlice";


const TextInput = () => {

  const theme = useSelector((state) => state.reducer.theme);

  const dispatch = useDispatch();

  // const handleThemeChange = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   dispatch(setTheme(newTheme));
  // };
  
  // const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    dispatch(setText(newText));
  };

  return (
    <textarea
      className={`w-full h-32 p-3 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-800"
      }`}
      placeholder="Enter text to translate"
      value={text}
      onChange={handleTextChange}
    ></textarea>
  );
};

export default TextInput;
