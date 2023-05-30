import React from "react";
import Herobanner from "./Herobanner";
import ShowByGenres from "./ShowByGenres";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className="px-4 lg:px-10">
      <Herobanner />
      <Trending />
      <ShowByGenres />
    </div>
  );
};

export default Home;
