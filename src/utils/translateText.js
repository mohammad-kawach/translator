import axios from "axios";

export default async function translateText(
  sourceText,
  sourceLanguage,
  targetLanguage
) {
  const encodedParams = new URLSearchParams();
  encodedParams.set("from", sourceLanguage);
  encodedParams.set("to", targetLanguage);
  encodedParams.set("text", sourceText);

  const options = {
    method: "POST",
    url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "9fc870cc62msh3e32df8c9fe6201p1d448ejsn1643343b56ff",
      "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Translation failed.");
  }
}
