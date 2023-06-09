import React from "react";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { fetchData } from "../../utils/api";
import ShowGenres from "./ShowGenres";

const ShowByGenres = () => {
  const loading = false;
  let responses = [];
  let promises = [];
  const { url, genres } = useSelector((state) => state.home);

  const showGenres = async () => {
    for (const g in genres) {
      promises.push(fetchData("/discover/movie", { with_genres: g }));
    }

    responses = await Promise.all(promises);
    const keys = Object.keys(genres);
    let i = 0;
    while (i < 20) {
      responses[i].genre = genres[keys[i]]?.name;

      i++;
    }
    return responses;
  };

  return (
    <div className="font-Poppins">
      {
        <ShowGenres
          responses={showGenres()}
          loading={loading}
          url={url}
          genres={genres}
        />
      }
    </div>
  );
};

export default ShowByGenres;
