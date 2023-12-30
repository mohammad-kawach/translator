import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchSupportedLanguages } from "../utils/fetchSupportedLanguages";
import {
  setSourceLanguage,
  setTargetLanguage,
} from "../features/languages/languageSlice";

const LanguageSelector = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  // const [sourceLanguage, setSourceLanguage] = useState("");
  const theme = useSelector((state) => state.reducer.theme);
  const supportedLanguages = useSelector(
    (state) => state.reducer.language.supportedLanguages
  );

  const sourceLanguage = useSelector(
    (state) => state.reducer.language.sourceLanguage
  );

  const targetLanguage = useSelector(
    (state) => state.reducer.language.targetLanguage
  );
  const loading = useSelector((state) => state.reducer.language.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch supported languages when the component mounts
    dispatch(fetchSupportedLanguages());
  }, [dispatch]);

  function handleChange(lang) {
    setSelectedLanguage(lang);
  }

  useEffect(() => {
    if (props.htmlFor == "sourceLanguage") {
      dispatch(setSourceLanguage(selectedLanguage));
    } else if (props.htmlFor == "targetLanguage") {
      dispatch(setTargetLanguage(selectedLanguage));
    }
  }, [selectedLanguage]);

  return (
    <div className="mb-4">
      <label
        htmlFor={props.htmlFor}
        className={`text-sm font-semibold mb-2 ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        {props.text}
      </label>
      <select
        id={props.htmlFor}
        className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none ${
          theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-800"
        }`}
        value={
          props.htmlFor == "sourceLanguage" ? sourceLanguage : targetLanguage
        }
        onChange={(e) => handleChange(e.target.value)}
        disabled={loading} // Disable select while loading
      >
        <option value="">Select source language</option>
        {loading ? (
          <option disabled>Loading...</option>
        ) : (
          supportedLanguages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.language}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

LanguageSelector.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default LanguageSelector;
