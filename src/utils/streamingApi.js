import axios from "axios";

const url = "https://streaming-availability.p.rapidapi.com/v2/get/basic";

const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_STREAM_API_KEY,
  "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
};

export const fetchStreamData = async (params) => {
  try {
    const response = await axios.get(url, {
      headers,
      params: { country: "in", ...params },
    });
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
