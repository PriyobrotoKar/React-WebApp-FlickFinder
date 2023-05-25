import React from "react";

import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

import "./trending.css";
import CaraosulSection from "./CaraosulSection";

const Trending = () => {
  const { data, loading } = useFetch("/trending/all/week");

  const { url, genres } = useSelector((state) => state.home);

  return (
    <div className="font-Poppins mt-10 overflow-visible mb-10">
      <h3 className="text-neutral-600 dark:text-neutral-100 font-medium text-xl mb-6">
        Weekly Trending Movies
      </h3>
      <CaraosulSection {...{ data, loading, url, genres }} />
    </div>
  );
};

export default Trending;
