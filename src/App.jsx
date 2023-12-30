import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggler from "./components/ThemeToggler";
import SocialIcons from "./components/SocialIcons";
import TextInput from "./components/TextInput";
import { fetchSupportedLanguages } from "./utils/fetchSupportedLanguages";
import LanguageSelector from "./components/LanguageSelector";
import TranslateButton from "./components/TranslateButton";
import TranslatedText from "./components/TranslatedText";
import CustomHeading from "./components/CustomHeading";

function App() {
  const theme = useSelector((state) => state.reducer.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupportedLanguages());
  }, [dispatch]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <CustomHeading text="Translator" />
      <div
        className={`w-96 bg-gray-800 rounded-lg shadow-lg p-6 ${
          theme === "dark" ? "text-white" : "bg-white text-gray-800"
        }`}
      >
        <ThemeToggler />
        <LanguageSelector htmlFor="sourceLanguage" text="Source Language" />
        <LanguageSelector htmlFor="targetLanguage" text="Target Language" />
        <TextInput />
        <TranslateButton />
        <TranslatedText />
      </div>
      <SocialIcons />
    </div>
  );
}

export default App;
