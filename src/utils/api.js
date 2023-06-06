import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchData = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params: {
        // region: "IN",
        // with_original_language: "hi",
        // language: "en-IN",
        ...params,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
