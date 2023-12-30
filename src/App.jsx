import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggler from "./components/ThemeToggler";
import SocialIcons from "./components/SocialIcons";
import TextInput from "./components/TextInput";
import { fetchSupportedLanguages } from "./utils/fetchSupportedLanguages";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const theme = useSelector((state) => state.reducer.theme);

  const dispatch = useDispatch();

  const supportedLanguages = useSelector(
    (state) => state.reducer.language.supportedLanguages
  );
  // const error = useSelector((state) => state.language.error);

  useEffect(() => {
    dispatch(fetchSupportedLanguages());
    console.log("fetchSupportedLanguages : ", fetchSupportedLanguages());
    console.log("supportedLanguages : ", supportedLanguages);
  }, [dispatch]);

  const handleTranslate = () => {
    console.log("Supported Languages : ", supportedLanguages);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-8 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Translator
      </h1>
      <div
        className={`w-96 bg-gray-800 rounded-lg shadow-lg p-6 ${
          theme === "dark" ? "text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="mb-4 flex justify-center">
          <ThemeToggler />
        </div>
        <LanguageSelector htmlFor="sourceLanguage" text="Source Language" />
        <LanguageSelector htmlFor="targetLanguage" text="Target Language" />
        <TextInput />
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
        {/* {translatedText && (
          <div className="mt-6">
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
          </div>
        )} */}
      </div>
      <SocialIcons />
    </div>
  );
}

export default App;
