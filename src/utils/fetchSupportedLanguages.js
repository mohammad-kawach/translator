import {
  setSupportedLanguages,
  setError,
} from "../features/languages/languageSlice";
import axios from "axios";

export const fetchSupportedLanguages = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      url: "https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages",
      headers: {
        "X-RapidAPI-Key": "9fc870cc62msh3e32df8c9fe6201p1d448ejsn1643343b56ff",
        "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      dispatch(setSupportedLanguages(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
