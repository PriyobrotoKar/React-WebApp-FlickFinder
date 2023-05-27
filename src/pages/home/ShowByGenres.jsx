import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetch from "../../hooks/useFetch";
import Img from "./Img";
import ShowGenres from "./ShowGenres";
import { fetchData } from "../../utils/api";
import { data } from "autoprefixer";

const ShowByGenres = () => {
  //   const { data, loading } = useFetch("/trending/all/week");
  const loading = false;
  let promises = [];
  const { url, genres } = useSelector((state) => state.home);
  // console.log(genres);

  const showGenres = async () => {
    for (const g in genres) {
      promises.push(fetchData("/discover/movie", { with_genres: g }));
    }

    const responses = await Promise.all(promises);
    const keys = Object.keys(genres);
    let i = 0;
    while (i < 20) {
      responses[i].genre = genres[keys[i]].name;

      i++;
    }
    // console.log(responses);
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
