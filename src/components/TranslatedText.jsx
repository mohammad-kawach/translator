import { useSelector } from "react-redux";

const TranslatedText = () => {
  const translatedText = useSelector(
    (state) => state.reducer.text.translatedText
  );

  const theme = useSelector(
    (state) => state.reducer.theme
  );

  return (
    <div className="mt-6">
      {translatedText && (
        <>
          <h3
            className={`text-lg font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Translated Text:
          </h3>
          <p
            className={`text-gray-300 ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            {translatedText}
          </p>
        </>
      )}
    </div>
  );
};

export default TranslatedText;
