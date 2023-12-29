import { useState } from "react";
import { useSelector } from "react-redux";
import ThemeToggler from "./components/ThemeToggler";
import SocialIcons from "./components/SocialIcons";

function App() {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const theme = useSelector((state) => state.theme.theme);

  const handleTranslate = () => {
    // Add your translation logic here
    // For this example, let's simply reverse the input text
    const reversedText = text.split("").reverse().join("");
    setTranslatedText(reversedText);
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
        <div className="mb-4">
          <label
            htmlFor="sourceLanguage"
            className={`text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Source Language
          </label>
          <select
            id="sourceLanguage"
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none ${
              theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-800"
            }`}
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="">Select source language</option>
            {/* Add your language options here */}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="targetLanguage"
            className={`text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Target Language
          </label>
          <select
            id="targetLanguage"
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none ${
              theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-800"
            }`}
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="">Select target language</option>
            {/* Add your language options here */}
          </select>
        </div>
        <textarea
          className={`w-full h-32 p-3 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none ${
            theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-white text-gray-800"
          }`}
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
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
        {translatedText && (
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
        )}
      </div>
      <SocialIcons />
    </div>
  );
}

export default App;
