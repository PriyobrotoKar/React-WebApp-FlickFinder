import React from "react";
import Herobanner from "./Herobanner";
import Trending from "./Trending";
import ShowByGenres from "./ShowByGenres";

const Home = () => {
  return (
    <>
      <Herobanner />
      <Trending />
      <ShowByGenres />
    </>
  );
};

export default Home;
