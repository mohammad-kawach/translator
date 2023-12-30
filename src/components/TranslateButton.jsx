// import React from "react"; v

import { useDispatch, useSelector } from "react-redux";
import translateText from "../utils/translateText";
import { setTranslatedText } from "../features/text/textSlice";

const TranslateButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.reducer.theme);

  const sourceLang = useSelector(
    (state) => state.reducer.language.sourceLanguage
  );

  const targetLang = useSelector(
    (state) => state.reducer.language.targetLanguage
  );

  const text = useSelector((state) => state.reducer.text.text);

  async function handleTranslate() {
    try {
      const translatedText = await translateText(text, sourceLang, targetLang);
      dispatch(setTranslatedText(translatedText.trans));
      
    } catch (error) {
      console.error(error);
    }
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
