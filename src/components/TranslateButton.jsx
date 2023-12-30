// import React from "react"; v

import { useSelector } from "react-redux";

const TranslateButton = () => {
  const theme = useSelector((state) => state.reducer.theme);

  function handleTranslate() {
    console.log("handleTranslate");
  }

  return (
    <button
      className={`w-full py-2 px-4 ${
        theme === "dark"
          ? "bg-gray-700 hover:bg-gray-600"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white font-semibold rounded-md transition-colors duration-300`}
      onClick={handleTranslate}
    >
      Translate
    </button>
  );
};

export default TranslateButton;
